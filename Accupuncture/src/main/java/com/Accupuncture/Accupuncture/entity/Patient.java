package com.Accupuncture.Accupuncture.entity;

//---Entity

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "PATIENT_REG")
@NoArgsConstructor
@AllArgsConstructor

public class Patient {

    @Id
    @Column(name="PATIENTID")
    private int patientID;


    @Column(name="NAME")
    private String name;

    @Column(name="ADDRESS")
    private String address;

    @Column(name="DOB")
    private String DOB;

    @Column(name="AGE")
    private int age;

    @Column(name="GENDER")
    private String gender;

    @Column(name="PHONENO")
    private String phoneNo;
}