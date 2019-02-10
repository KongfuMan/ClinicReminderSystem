package com.ClinicReminder.Services;

import com.ClinicReminder.Models.Patient;
import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Repositories.DoctorRepository;
import com.ClinicReminder.Repositories.PatientRepository;
import com.ClinicReminder.Repositories.ReminderRepository;
import com.ClinicReminder.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.PriorityQueue;

@Service
public class PatientService {

    @Autowired
    private UserService userService;

    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private PatientRepository patientRepository;


    public Reminder markReminderAsDone(Reminder reminder){
        Reminder newReminder = reminderRepository.findByReminderId(reminder.getReminderId());
        newReminder.setDone(true);
        return reminderRepository.save(newReminder);
    }


    public Collection<Reminder> getAllHistoryReminder(){
        Patient patient = patientRepository.findByUsername(userService.getUserNameFromContext());
        int unixTime = (int)(System.currentTimeMillis() / 1000L);
        List<Reminder> reminders =reminderRepository.findAllHistoryRemindersByPatientID(patient.getUserID(),unixTime);
        Collection<Reminder> res = new PriorityQueue<Reminder>(Reminder.timeComparator);
        res.addAll(reminders);
        return res;
    }


}
