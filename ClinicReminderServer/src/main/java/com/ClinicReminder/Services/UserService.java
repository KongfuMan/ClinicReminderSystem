package com.ClinicReminder.Services;


import com.ClinicReminder.Config.SecurityUtility;
import com.ClinicReminder.Exceptions.InvalidInputException;
import com.ClinicReminder.Exceptions.UsernameAlreadyExistException;
import com.ClinicReminder.Models.*;
import com.ClinicReminder.Models.Security.Role;
import com.ClinicReminder.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class UserService {
    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private PatientRepository patientRepo;

    @Autowired
    private DoctorRepository doctorRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private DoctorPatientRepository docPatRepo;

    @Autowired
    private JWTProvider jwtProvider;

    @Autowired
    private ReminderRepository reminderRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private SecurityUtility securityUtility;

    //my bussiness logic of login authenticate
    public String signin(User user) throws AuthenticationException {
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                user.getUsername(), user.getPassword());
        Authentication authRes = this.authenticationManager.authenticate(authenticationToken);
        return jwtProvider.createToken((User)authRes.getPrincipal());
    }

//    public String signup(User user){
//        if (user == null){
//            throw new InvalidInputException("Invalid input data");
//        }
//
//        User localUser = userRepo.findByUsername(user.getUsername());
//        if (localUser != null){
//            throw new UsernameAlreadyExistException("Username" + user.getUsername() + "already exist!");
//        }else{
//            String encryptedPsw = securityUtility.passwordEncoder().encode(user.getPassword());
//            user.setPassword(encryptedPsw);
//            Role role = roleRepo.findByName("Doctor");
//            userRepo.save(user);
//
//            String[] rolenames = new String[1];
//            rolenames[0] = role.getName();
//            String jwt = jwtProvider.createToken(user);
//            return jwt;
//        }
//    }

    public String getUserNameFromContext(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName(); //get logged in username
    }

    public void addTestData(){
        List<Role> roles = new ArrayList<>();
        roles.add(new Role("DOCTOR"));
        roles.add(new Role("PATIENT"));
        roles.add(new Role("ADMIN"));
        roleRepo.saveAll(roles);

        List<Doctor> doctors = new ArrayList();
        List<Patient> patients = new ArrayList();
        List<DoctorPatient> doctorPatients = new ArrayList<>();
        int numDoc = 2, numPat = 80;

        Role doctorRole = roleRepo.findByName("DOCTOR");
        FakeNameGen nameGen = new FakeNameGen();
        for (int i = 0; i < numDoc; i++){
            Doctor doctor = new Doctor();
            doctor.setPassword("$2a$12$uqizWFEzTBhCRulDGOcITOaRt89G4dZ6hfpohCncDjoloneWFxS7q");
            doctor.setUsername("Doctor" + i);
            doctor.setTitle("physician");
            doctor.setRole(doctorRole);
            doctor.setEmail(doctor.getUsername() + "@gmail.com");
            doctor.setFirstName(nameGen.randomIdentifier());
            doctor.setLastName(nameGen.randomIdentifier());
            doctors.add(doctor);
        }
        doctorRepo.saveAll(doctors);

        Role patientRole = roleRepo.findByName("PATIENT");
        for (int i = 0; i < numPat; i++){
            Patient patient = new Patient();
            patient.setDisease("cancer");
            patient.setUsername("Patient" + i);
            patient.setPassword("$2a$12$uqizWFEzTBhCRulDGOcITOaRt89G4dZ6hfpohCncDjoloneWFxS7q");
            patient.setRole(patientRole);
            patient.setEmail(patient.getUsername() + "@gmail.com");
            patient.setFirstName(nameGen.randomIdentifier());
            patient.setLastName(nameGen.randomIdentifier());
            patients.add(patient);
        }
        patientRepo.saveAll(patients);

        for (int i = 0; i < numDoc; i++) {
            Doctor doc = doctors.get(i);
            for (int j = 0; j < 40; j++){
                int k = i*40 + j;
                DoctorPatient doctorPatient = new DoctorPatient();
                doctorPatient.setDoctor(doc);
                Patient patient = patients.get(k);
                doctorPatient.setPatient(patient);
                doctorPatients.add(doctorPatient);
            }
        }
        docPatRepo.saveAll(doctorPatients);

        List<Reminder> reminders = new ArrayList<>();
        int now = (int)(System.currentTimeMillis() / 1000L);
        Random random = new Random();
        for(int l = 0; l < 10; l++){
            for (int i = 0; i < numDoc; i++) {
                Doctor doc = doctors.get(i);
                for (int j = 0; j < 40; j++) {
                    int m = i * 40 + j;
                    Patient patient = patients.get(m);
                    for (int k = 0; k < 5; k++){
                        Reminder re = new Reminder();
                        int day = random.nextInt(10);
                        re.setCreate_at(now - day*24*3600);
                        re.setDescription("this a reminder from " + doc.getUsername() + " and to " + patient.getUsername());
                        re.setDuration(random.nextInt(48)*3600);
                        re.setPriority(random.nextInt(2));
                        re.setDoctor((Doctor)doc);
                        re.setPatient(patient);
                        re.setDone(random.nextBoolean());
                        reminders.add(re);
                    }
                }
            }
        }

        reminderRepo.saveAll(reminders);
    }
}
