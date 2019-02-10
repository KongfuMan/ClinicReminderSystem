package com.ClinicReminder.Services;


import com.ClinicReminder.Models.Doctor;
import com.ClinicReminder.Models.Patient;
import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import com.ClinicReminder.Repositories.DoctorRepository;
import com.ClinicReminder.Repositories.PatientRepository;
import com.ClinicReminder.Repositories.ReminderRepository;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserService userService;

    public List<Reminder> getHistoryReminders() {
        Doctor doc = doctorRepository.findByUsername(userService.getUserNameFromContext());

        int now = (int)(System.currentTimeMillis() / 1000L);
        int before = now - 7*24*3600;
        List<Reminder> reminders = reminderRepository.findAllHistoryRemindersByDoctorID(doc.getUserID(),now,before);
        return reminders;
    }

    public List<Reminder> getUnFinishedReminders(){
        Doctor doctor = doctorRepository.findByUsername(userService.getUserNameFromContext());
        return reminderRepository.findAllUnishedRemindersByDoctorID(doctor.getUserID());
    }

    public List<Patient> getAllPatientByDoctorName(String docName){
        Doctor doctor = doctorRepository.findByUsername(docName);
        return patientRepository.findAllPatientsByDoctorID(doctor.getUserID());
    }

    public Reminder sendReminder(Reminder reminder){
        String docName = reminder.getDoctorName();
        String patName = reminder.getPatientName();
        Doctor doctor = doctorRepository.findByUsername(docName);
        Patient patient = patientRepository.findByUsername(patName);
        reminder.setDoctor(doctor);
        reminder.setPatient(patient);
        reminder.setCreate_at(System.currentTimeMillis() / 1000L);
        return reminderRepository.save(reminder);
    }

    public List<Reminder> getAllReminders(){
        String docName = userService.getUserNameFromContext();
//        String docName = "doctor1";
        Doctor doctor = doctorRepository.findByUsername(docName);
        return reminderRepository.findAllByDoctor(doctor);
    }
}
