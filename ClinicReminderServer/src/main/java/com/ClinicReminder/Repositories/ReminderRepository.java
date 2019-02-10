package com.ClinicReminder.Repositories;


import com.ClinicReminder.Models.Doctor;
import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import com.sun.org.apache.regexp.internal.RE;
import org.hibernate.annotations.NamedNativeQueries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Time;
import java.util.List;
import java.util.Set;


public interface ReminderRepository extends JpaRepository<Reminder, Integer> {

    public Set<Reminder> findByDoctor_UserID(int doctorId);

    public Set<Reminder> findByPatient_UserID(int patientId);

    public Reminder findByReminderId(int reminderId);

//    @Query(value = "UPDATE Reminder " +
//            "SET Reminder.is_done = true " +
//            "WHERE Reminder.reminder_id = ?1", nativeQuery = true)
//    public Reminder setReminderDone(int rmdID);

    @Query(value= "SELECT Reminder.* " +
            "FROM Reminder " +
            "WHERE Reminder.doctor_id = ?1 " +
            "AND Reminder.create_at + Reminder.duration < ?2 AND Reminder.create_at + Reminder.duration > ?3",
            nativeQuery = true)
    public List<Reminder> findAllHistoryRemindersByDoctorID(int id, long now, long before);

    @Query(value = "SELECT Reminder.* " +
            "FROM Reminder " +
            "WHERE Reminder.patient_id = ?1 AND Reminder.create_at + Reminder.duration < ?2 ", nativeQuery = true)
    public List<Reminder> findAllHistoryRemindersByPatientID(int id, long now);


    @Query(value = "SELECT Reminder.* FROM Reminder WHERE Reminder.patient_id = ?1 AND " +
            "Reminder.is_done = 0", nativeQuery = true)
    public List<Reminder> findAllUnfinishedRemindersByPatientID(int id);


    @Query(value = "SELECT Reminder.* FROM Reminder WHERE Reminder.doctor_id = ?1 AND " +
            "Reminder.is_done = 0", nativeQuery = true)
    public List<Reminder> findAllUnishedRemindersByDoctorID(int id);

    public List<Reminder> findAllByDoctor(Doctor doctor);
}
