package com.sk.EMS.controller;

import com.sk.EMS.dto.EmployeeDto;
import com.sk.EMS.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*

see notes.txt
https://www.udemy.com/course/full-stack-java-development-with-spring-boot-react/?referralCode=86222EF6D33E4738963E
Next, let us annotate this EmployeeController class with @RestController annotation.

Well, once we annotate a class with @RestController annotation, then this class becomes a spring

rest controllers and this class is capable to handle Http requests.
*/
@CrossOrigin("*") //  star means all the clients can able to call the employee related APIs.
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

 private EmployeeService employeeService;

 // Build Add Employee REST API
 @PostMapping
 public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
  EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
  return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
 }
 /* open postman
 requiest type : post
 url: http://localhost:8090/api/employees
 body : raw:
 {"firstName":"sai","lastName":"krishna","email":"sai@gmail.com"}
 click on send

 response is
 {"id":1,"firstName":"sai","lastName":"krishna","email":"sai@gmail.com"}
  */




 // Build Get Employee REST API

 /*
 request type: get - http://localhost:8090/api/employees/1
 send

 response
 {
    "id": 1,
    "firstName": "sai",
    "lastName": "krishna",
    "email": "sai@gmail.com"
}
  */
 /* {
    "timestamp": "2024-02-03T20:07:24.267+00:00",
    "status": 404,
    "error": "Not Found",
    "path": "/api/employees/2"
}*/
 // Build Get Employee REST API

 @GetMapping("{id}")
 public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
  EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
  return ResponseEntity.ok(employeeDto);
 }




 /*

        request type: get - http://localhost:8090/api/employees

       result [
   {
       "id": 1,
       "firstName": "sai",
       "lastName": "krishna",
       "email": "sai@gmail.com"
   }
]*/
 // Build Get All Employees REST API
 @GetMapping
 public ResponseEntity<List<EmployeeDto>> getAllEmployees()
 {
  List<EmployeeDto> employees = employeeService.getAllEmployees();
  return ResponseEntity.ok(employees);
 }




 /*So basically this save method perform both save and update operation.
Well, if the employee object contains ID, then the save method internally perform the update operation.
And if the employee doesn't contain the primary key ID then it will perform the insert operation. */
 // update employee

 @PutMapping("{id}")
 public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                   @RequestBody EmployeeDto updatedEmployee){
  EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
  return ResponseEntity.ok(employeeDto);
 }
 /*
 request type : put
 http://localhost:8090/api/employees/1
 body:
 {
"firstName":"sai12",
"lastName":"krishna2",
"email":"sai@gmail.com"

}

 response:
{
    "id": 1,
    "firstName": "sai12",
    "lastName": "krishna2",
    "email": "sai@gmail.com"
}
  */



 // Build Delete Employee REST API
 @DeleteMapping("{id}")
 public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
  employeeService.deleteEmployee(employeeId);
  return ResponseEntity.ok("Employee deleted successfully!.");
 }

}
