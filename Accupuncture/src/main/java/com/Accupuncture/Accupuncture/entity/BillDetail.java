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
@Table(name = "BILL_DETAIL")
@NoArgsConstructor
@AllArgsConstructor
public class BillDetail {

    @Id
    @Column(name = "BILL_ID")
    private int billID;

    @Column(name = "PATIENT_ID")
    private int patientID;

    @Column(name = "TOTAL_AMOUNT")
    private double totalAmount;
}
