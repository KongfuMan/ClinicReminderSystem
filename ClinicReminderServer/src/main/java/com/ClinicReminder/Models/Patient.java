package com.ClinicReminder.Models;




import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Patient")
public class Patient extends User{

    private String disease;

    @JsonIgnore
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY) //doctor has one to many reminders
    private Set<Reminder> reminders = new HashSet();

    @JsonIgnore
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    private Set<DoctorPatient> doctorPatients = new HashSet<>();

    public Patient() {
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public Set<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(Set<Reminder> reminders) {
        this.reminders = reminders;
    }

    public Set<DoctorPatient> getDoctorPatients() {
        return doctorPatients;
    }

    public void setDoctorPatients(Set<DoctorPatient> doctorPatients) {
        this.doctorPatients = doctorPatients;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "disease='" + disease + '\'' +
                ", reminders=" + reminders +
                ", doctorPatients=" + doctorPatients +
                "} " + super.toString();
    }
}
