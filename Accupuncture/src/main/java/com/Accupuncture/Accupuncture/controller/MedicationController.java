package com.Accupuncture.Accupuncture.controller;

import com.Accupuncture.Accupuncture.entity.Medication;
import com.Accupuncture.Accupuncture.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medications")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @PostMapping("/add")
    public Medication addMedication(@RequestBody Medication medication) {
        return medicationService.addMedication(medication);
    }
}