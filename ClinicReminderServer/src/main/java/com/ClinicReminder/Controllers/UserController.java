package com.ClinicReminder.Controllers;

import com.ClinicReminder.Models.JwtModel;
import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import com.ClinicReminder.Repositories.DoctorRepository;
import com.ClinicReminder.Services.DoctorService;
import com.ClinicReminder.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserService userService;

//    @Autowired
//    private DoctorService doctorService;

//    @GetMapping(path = GET_VALID_REMINDERS)
//    public List<Reminder> getValidReminder(Integer userId){
//        if (userId == null){
//            return null;
//        }
//        return userService.getValidReminders(userId);
//    }

//    @GetMapping(path = "/gethistoryreminders")
//    public List<Reminder> getHistoryReminders(@RequestBody User user, HttpServletResponse response){
//        return userService.getHistoryReminders(user);
//    }

    // multimorphic Json data format:
    // "doctor": the name of @JsonSubTypes
    // "userName": must be exactly same as variable name of User class
    //{
    //    "doctor" : {
    //    "userName": "Doctor0",
    //    "password": "123"
    //}
    //}

    @GetMapping(path = "/authenticate")
    public void authenticate(HttpServletRequest req, HttpServletResponse res){
        res.setStatus(HttpServletResponse.SC_OK);
    }

    @PostMapping(path = "/signin")
    public JwtModel signin(@RequestBody User user, HttpServletResponse response){ //
        String jwt = userService.signin(user);
        if (jwt != null){
            response.setStatus(HttpServletResponse.SC_OK);
            System.out.println(jwt);
            return new JwtModel(jwt);
        }
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);    //401 page
        return  null;
    }

    @GetMapping(path = "/test")
    public void addTestData(){
        userService.addTestData();
    }
}
