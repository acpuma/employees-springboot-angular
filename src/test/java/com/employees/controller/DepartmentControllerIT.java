package com.employees.controller;

import com.employees.EmployeesApplication;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = EmployeesApplication.class)
@AutoConfigureMockMvc
@WithMockUser(username = "editor", password = "editor", authorities = "ROLE_EDITOR")
class DepartmentControllerIT {

    private static final String API_URL = "/api/departments/";
    @Autowired
    private MockMvc restMockMvc;

    @Test
    @Transactional
    void getAllDepartments() throws Exception {
        restMockMvc.perform(get(API_URL).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }
}
