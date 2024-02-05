package com.sk.EMS.repository;

import com.sk.EMS.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
//https://medium.com/@lsampath210/how-spring-instantiate-jparepository-interfaces-52e97c8875e5

/*In Spring, when you inject an interface like EmployeeRepository into EmployeeService, Spring's Inversion of Control (IoC) container
automatically creates and injects an implementation of the EmployeeRepository interface at runtime. This is possible because
EmployeeRepository typically extends a Spring Data interface (e.g., JpaRepository), and Spring Data generates a proxy implementation of
the repository interface behind the scenes. You don't see the concrete class because Spring dynamically creates it for you based on the
methods defined in the interface. This approach allows you to focus on defining the repository interface, and Spring handles the
instantiation and injection of the actual repository bean into your service.

*/
// https://howtodoinjava.com/design-patterns/structural/proxy-design-pattern/
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
