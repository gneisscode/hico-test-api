
import { app } from "../src/index";
import chaiHttp from "chai-http";
import chai from "chai";

chai.use(chaiHttp);
const { expect } = chai;

describe("EmployeeController Tests", () => {
  describe("test", () => {
    it('should return a 200 response with "API Alive."', (done) => {
      chai
        .request(app)
        .get("/api/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal("API Alive.");
          done();
        });
    });
  });

    describe("addEmployee", () => {
      it("should add a new employee and return a 200 response", async () => {
        const employeeData = {
          firstName: "Shalom",
          lastName: "Effiom",
          salutation: "Dr.",
          gender: "male",
          employeeNo: 1222223,
          grossSalary: 9000000,
          profileColour: "Blue",
        };

        const res = await chai
          .request(app)
          .post("/api/employee")
          .send(employeeData);

        expect(res).to.have.status(200);
        expect(res.body).to.have.property("data");
        expect(res.body).to.have.property("message", "Employee record added.");
      });

      it("should return a 400 response if the employee number is already in use", async () => {
        const employeeData = {
          firstName: "Shalom",
          lastName: "Effiom",
          salutation: "Dr.",
          gender: "male",
          employeeNo: 1222223,
          grossSalary: 9000000,
          profileColour: "Blue",
        };

        const res = await chai
          .request(app)
          .post("/api/employee")
          .send(employeeData);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property(
          "message",
          "Employee number already in use. Please choose a unique number."
        );
      });

    });

    describe("getEmployee", () => {
      it("should return employee details for a valid ID", async () => {
         const employeeData = {
          id: `652bc14a7d947362d68ea8a1`,
          firstName: "Shalom",
          lastName: "Effiom",
          salutation: "Dr.",
          gender: "male",
          employeeNo: 1222223,
          grossSalary: 9000000,
          profileColour: "Blue",
        };

        const res = await chai
          .request(app)
          .get("/api/employee/652bc14a7d947362d68ea8a1")
          .send(employeeData);

        expect(res).to.have.status(200);
        expect(res.body).to.have.property("message", "Employee details.");
      });
    });

    describe("getEmployees", () => {
      it("should return a list of employees", async () => {
       const res = await chai
         .request(app)
         .get("/api/employee")
       
        
       expect(res.body).to.have.property("data");
       expect(res).to.have.status(200);
       expect(res.body).to.have.property("message", "Employees.");
      });

    
    });

    describe("updateEmployee", () => {
      it("should update employee details and return a 200 response", async () => {
         const employeeData = {
           id: `652bc14a7d947362d68ea8a1`,
           firstName: "Shalom",
           lastName: "Effiom",
           salutation: "Dr.",
           gender: "male",
           employeeNo: 1222223,
           grossSalary: 9000000,
           profileColour: "Blue",
         };
          const res = await chai
            .request(app)
            .put("/api/employee")
            .send(employeeData);

          expect(res).to.have.status(200);
          expect(res.body).to.have.property(
            "message",
            "Employee details updated."
          );
      });

      it("should return a 404 response for an invalid ID", async () => {
       const employeeData = {
         id: `652bc14a7d947362d68ea8a2`,
         firstName: "Shalom",
         lastName: "Effiomm",
         salutation: "Dr.",
         gender: "male",
         employeeNo: 1222223,
         grossSalary: 9000000,
         profileColour: "Blue",
       };
       const res = await chai
         .request(app)
         .put("/api/employee")
         .send(employeeData);

       expect(res).to.have.status(404);
       expect(res.body).to.have.property(
         "message",
         "Employee record not found."
       );
      });

    });

  //   describe("deleteEmployee", () => {
  //     it("should delete an employee and return a 200 response", async () => {
  //       // Implement a test case for deleting an employee...
  //     });

  //     it("should return a 404 response for an invalid ID", async () => {
  //       // Implement a test case for an invalid ID...
  //     });

});
