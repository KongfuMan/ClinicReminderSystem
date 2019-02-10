package com.ClinicReminder.Repositories;


import com.ClinicReminder.Models.Doctor;
import com.ClinicReminder.Models.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;


@Transactional
public interface DoctorRepository extends UserBaseRepository<Doctor> {
    public Doctor findByUserID(int doctorId);

    public Doctor findByUsername(String username);

    public Doctor getDoctorByUserID(int doctorId);
}
