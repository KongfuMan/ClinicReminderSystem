package com.ClinicReminder.Controllers;


import com.ClinicReminder.Models.Doctor;
import com.ClinicReminder.Models.Patient;
import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import com.ClinicReminder.Services.DoctorService;
import com.ClinicReminder.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;


@RestController // equivalent to @Controller + @ResponseBody
@RequestMapping(path = "/doctor")
public class DoctorController{

    @Autowired
    private DoctorService doctorService;

    @GetMapping(path = "/gethistoryreminders")
    public List<Reminder> getAllHistoryReminders(){
        return doctorService.getHistoryReminders();
    }

    @GetMapping(path = "/getunfinishedreminders")
    public List<Reminder> getAllUnfinishedReminder(){
        return doctorService.getUnFinishedReminders();
    }

    @GetMapping(path = "/getallreminders")
    public List<Reminder> getAllReminders(){
        List<Reminder> reminders = doctorService.getAllReminders();
        return reminders;
    }

    @MessageMapping("/sendreminder")
    @SendTo("/topic/receivereminder")
    public Reminder sendReminder(Reminder reminder){
        return doctorService.sendReminder(reminder);
    }

    @GetMapping(path = "/getallpatients")
    public List<Patient> getAllPatient(){
        List<Patient> res = doctorService.getAllPatientByDoctorName("Doctor0");
        return res;
    }
}
