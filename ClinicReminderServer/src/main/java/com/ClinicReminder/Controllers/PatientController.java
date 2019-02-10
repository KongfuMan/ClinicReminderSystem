package com.ClinicReminder.Controllers;


import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import com.ClinicReminder.Services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@RestController
@RequestMapping(value = "/patient")
@CrossOrigin(origins = "*")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @MessageMapping("/senddone")
    @SendTo("/topic/receivedone")
    public Reminder markDone(Reminder reminder){
        return patientService.markReminderAsDone(reminder);
    }

    @GetMapping(path = "/getallhistoryreminders")
    public Collection<Reminder> getAllHistoryReminders(){
        return patientService.getAllHistoryReminder();
    }

}
