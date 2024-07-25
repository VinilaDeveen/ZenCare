package com.Accupuncture.Accupuncture.repository;

import com.Accupuncture.Accupuncture.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicationRepository extends JpaRepository<Medication, Integer> {
}