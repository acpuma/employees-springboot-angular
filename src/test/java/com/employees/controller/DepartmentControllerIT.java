package com.employees.controller;

import com.employees.EmployeesApplication;
import com.employees.domain.Department;
import com.employees.repository.DepartmentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(classes = EmployeesApplication.class)
@AutoConfigureMockMvc
@WithMockUser(username = "editor", password = "editor", authorities = "ROLE_EDITOR")
class DepartmentControllerIT {

    private static final String API_URL = "/api/departments/";
    @Autowired
    private MockMvc restMockMvc;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Test
    @Transactional
    void getAllDepartments() throws Exception {
        restMockMvc.perform(get(API_URL))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.[*].departmentName").value(hasItem("IT")));
    }

    @Test
    @Transactional
    void createDepartment() throws Exception {
        int departmentsSize = departmentRepository.findAll().size();
        Department department = new Department();
        department.setDepartmentName("Space");
        String departmentJson = new ObjectMapper().writeValueAsString(department);
        restMockMvc.perform(post(API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .content(departmentJson))
            .andExpect(status().isCreated());
        List departments = departmentRepository.findAll();
        assertThat(departments.size()).isEqualTo(departmentsSize+1);
    }

    @Test
    @Transactional
    void getDepartment() throws Exception {
        restMockMvc.perform(get(API_URL+"1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.departmentName").exists());
    }

    @Test
    @Transactional
    void updateDepartment() throws Exception {
        Department dept= departmentRepository.findById(1L).get();
        dept.setDepartmentName("NewName");
        String deptJson = new ObjectMapper().writeValueAsString(dept);
        restMockMvc.perform(put(API_URL + "1")
            .contentType(MediaType.APPLICATION_JSON).content(deptJson))
            .andExpect(status().isOk());
        assertThat(departmentRepository.findById(1L).get().getDepartmentName()).isEqualTo("NewName");
    }

    @Test
    @Transactional
    void deleteDepartment() throws Exception {
        int departmentsSize = departmentRepository.findAll().size();
        restMockMvc.perform(delete(API_URL + "10"))
            .andExpect(status().isOk());
        assertThat(departmentRepository.findAll().size()).isEqualTo(departmentsSize-1);
    }

}
