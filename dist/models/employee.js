"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    salutation: {
        type: String,
        enum: ["Dr.", "Mr.", "Ms.", "Mrs.", "Mx."],
        required: true,
        default: "Mx."
    },
    gender: {
        type: String,
        enum: ["male", "female", "unspecified"],
        required: true,
    },
    employeeNo: { type: Number, required: true, unique: true },
    profileColour: {
        type: String,
        enum: ["Green", "Red", "Blue", "Default"],
        required: true,
        default: "Default"
    },
    grossSalary: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
});
const Employee = mongoose_1.default.model("Employee", employeeSchema);
exports.default = Employee;
//# sourceMappingURL=employee.js.map