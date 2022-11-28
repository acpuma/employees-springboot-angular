package com.employees.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
public class Department implements Serializable {

    private static final long serialVersionUID = -1068551191195837889L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String departmentName;

    @JsonIgnore
    @OneToMany(mappedBy = "department")
    private Collection<Employee> employees;
}
