import mongoose, { ObjectId } from "mongoose";

type Salutation = "Dr." | "Mr." | "Ms." | "Mrs." | "Mx.";
type Gender = "male" | "female" | "unspecified";
type ProfileColour = "Green" | "Red" | "Blue" | "Default";

export interface EmployeeDocument extends mongoose.Document {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  salutation: Salutation;
  gender: Gender;
  employeeNo: number;
  profileColour: ProfileColour;
  grossSalary?: number;
  createdAt: Date;
  updatedAt: Date | null;
}

const employeeSchema = new mongoose.Schema<EmployeeDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  salutation: {
    type: String,
    enum: ["Dr.", "Mr.", "Ms.", "Mrs.", "Mx."],
    required: true,
    default:"Mx."
  },
  gender: {
    type: String,
    enum: ["male", "female", "unspecified"],
    required: true,
  },
  employeeNo: { type: Number, required: true, unique: true },
  
  profileColour: {
    type: String,
    enum: ["Green", "Red" , "Blue" , "Default" ],
    required: true,
    default: "Default"
  },
  grossSalary: {type: String, default:null},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

const Employee = mongoose.model<EmployeeDocument>("Employee", employeeSchema);

export default Employee;
