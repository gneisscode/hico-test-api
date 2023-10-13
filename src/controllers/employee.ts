import { Request, Response } from "express";
import { Employee } from "@models";

export class EmployeeController {


  static async test(req: Request, res: Response) {
    try {
      return res.status(200).json({
        message: "API Alive.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occured",
      });
    }
  }


  static async addEmployee(req: Request, res: Response) {
    try {
     
      const { employeeNo } = req.body;

 
      const existingEmployee = await Employee.findOne({ employeeNo });

      if (existingEmployee) {
        return res.status(400).json({
          message:
            "Employee number already in use. Please choose a unique number.",
        });
      }

  
      const employee = new Employee(req.body);

      await employee.save();

      return res.status(200).json({
        data: employee,
        message: "Employee record added.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occurred",
      });
    }
  }


  static async getEmployee(req: Request, res: Response) {
    try {
      const employee = await Employee.findById(req.params.id);

      if (employee) {
        return res.status(200).json({
          data: employee,
          message: "Employee details.",
        });
      }

      return res.status(404).json({
        data: employee,
        message: "Employee record not found.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occured",
      });
    }
  }

  static async getEmployees(req: Request, res: Response) {
    try {
      const employees = await Employee.find();

      if (employees) {
        return res.status(200).json({
          data: employees,
          message: "Employees.",
        });
      }

      return res.status(404).json({
        data: employees,
        message: "No employees found.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occured",
      });
    }
  }

  static async updateEmployee(req: Request, res: Response) {
    try {
      let {
        id,
        firstName,
        lastName,
        salutation,
        gender,
        employeeNum,
        grossSalary,
        profileColour,
      } = req.body;

      const update = {
        firstName,
        lastName,
        salutation,
        gender,
        employeeNum,
        grossSalary,
        profileColour,
        updatedAt: new Date(),
      };

      const employee = await Employee.findOneAndUpdate({ _id: id }, update, {
        new: true,
      });

      if (employee !== null) {
        return res.status(200).json({
          data: employee,
          message: "Employee details updated.",
        });
      }

      return res.status(404).json({
        data: null,
        message: "Employee record not found.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occurred",
      });
    }
  }

  static async deleteEmployee(req: Request, res: Response) {
    try {
      const employee = await Employee.findByIdAndDelete({ id: req.params.id });

      return res.status(200).json({
        data: employee,
        message: "Employee deleted.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occured",
      });
    }
  }
}
