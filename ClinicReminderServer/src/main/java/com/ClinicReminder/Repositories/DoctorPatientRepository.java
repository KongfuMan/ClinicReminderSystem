package com.ClinicReminder.Repositories;

import com.ClinicReminder.Models.DoctorPatient;
import com.ClinicReminder.Models.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Transactional
public interface DoctorPatientRepository extends CrudRepository<DoctorPatient, Integer> {

}
