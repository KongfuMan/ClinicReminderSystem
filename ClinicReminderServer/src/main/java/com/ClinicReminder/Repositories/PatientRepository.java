package com.ClinicReminder.Repositories;

import com.ClinicReminder.Models.Patient;
import com.ClinicReminder.Models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Transactional
public interface PatientRepository extends UserBaseRepository<Patient> {
    public Patient getPatientByUserID(int userId);

    //be careful if you want to return Patient object, you should put this function to the corresponding repo
    @Query(value = "SELECT User.*, Patient.* " +
            "FROM Doctor_Patient, Patient, User " +
            "WHERE Doctor_Patient.Patient_id = Patient.user_id AND Doctor_Patient.Patient_id = User.user_id AND Doctor_Patient.doctor_id = ?1",nativeQuery = true)
    public List<Patient> findAllPatientsByDoctorID(int doctorId);

    public Patient findByUsername(String patName);
}
