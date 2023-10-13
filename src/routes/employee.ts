import { EmployeeController } from "@controllers";
import { Router } from "express";

const employeeRoutes = Router();

employeeRoutes.get("/", EmployeeController.test);
employeeRoutes.post("/employee", EmployeeController.addEmployee);
employeeRoutes.get("/employee/:id", EmployeeController.getEmployee);
employeeRoutes.get("/employee", EmployeeController.getEmployees);
employeeRoutes.put("/employee", EmployeeController.updateEmployee);
employeeRoutes.delete("/employee/:id", EmployeeController.deleteEmployee);

export default employeeRoutes;
