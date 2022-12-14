package com.employees.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Data
public class Authority implements Serializable {

    private static final long serialVersionUID = 339422156376223805L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(length = 50)
    private String role;

}
