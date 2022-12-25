package com.employees.controller;

import com.employees.config.AuthoritiesConstants;
import com.employees.domain.Employee;
import com.employees.repository.EmployeeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
        return new ResponseEntity<>(employeeRepository.findById(id).get(),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Secured(AuthoritiesConstants.EDITOR)
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    @Secured(AuthoritiesConstants.EDITOR)
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                               @RequestBody Employee employee) {
      return new ResponseEntity<>(employeeRepository.save(employee), HttpStatus.OK);
    }
}
