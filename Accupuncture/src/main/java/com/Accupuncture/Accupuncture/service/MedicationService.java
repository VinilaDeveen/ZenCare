package com.Accupuncture.Accupuncture.service;

import com.Accupuncture.Accupuncture.entity.*;
import com.Accupuncture.Accupuncture.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private BillDetailRepository billDetailRepository;

    @Autowired
    private InventoryItemRepository inventoryItemRepository;

    @Autowired
    private PatientRepository patientRepository;

    public Medication addMedication(Medication medication) {
        // Update Inventory
        Optional<InventoryItem> optionalItem = inventoryItemRepository.findById(medication.getItemID());
        if (optionalItem.isPresent()) {
            InventoryItem inventoryItem = optionalItem.get();
            inventoryItem.setQty(inventoryItem.getQty() - medication.getQuantity());
            inventoryItemRepository.save(inventoryItem);

            // Save Medication
            medicationRepository.save(medication);

            // Update Bill Details
            BillDetail billDetail = billDetailRepository.findById(medication.getPatientID()).orElse(new BillDetail());
            billDetail.setPatientID(medication.getPatientID());
            billDetail.setTotalAmount(billDetail.getTotalAmount() + medication.getTotalAmount());
            billDetailRepository.save(billDetail);

            // Update Patient's Total Amount
            Patient patient = patientRepository.findById(medication.getPatientID()).orElse(null);
            if (patient != null) {
                patient.setTotalAmount(patient.getTotalAmount() + medication.getTotalAmount());
                patientRepository.save(patient);
            }

            return medication;
        }
        return null;
    }
}

