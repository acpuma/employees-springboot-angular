package com.employees.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
public class Employee implements Serializable {

    private static final long serialVersionUID = 8871207649293034541L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;

    private String lastName;

    private Double salary;

    private Date birthDate;

    private Boolean active;

    @ManyToOne
    @JsonIgnore
    private Department department;

}
