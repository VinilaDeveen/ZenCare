package com.Accupuncture.Accupuncture.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "MEDICATION")
@NoArgsConstructor
@AllArgsConstructor
public class Medication {

    @Id
    @Column(name = "MEDICATION_ID")
    private int medicationID;

    @Column(name = "PATIENT_ID")
    private int patientID;

    @Column(name = "ITEM_ID")
    private int itemID;

    @Column(name = "QUANTITY")
    private int quantity;

    @Column(name = "TOTAL_AMOUNT")
    private double totalAmount;
}

