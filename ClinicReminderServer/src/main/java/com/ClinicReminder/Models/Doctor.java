package com.ClinicReminder.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Doctor")
public class Doctor extends User{

    @JsonIgnore
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    private Set<Reminder> reminders = new HashSet();

    @JsonIgnore
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    private Set<DoctorPatient> doctorPatients = new HashSet<>();

    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(Set<Reminder> reminders) {
        this.reminders = reminders;
    }

//    @Override
//    public int getUserType() {
//        return 1;
//    }

//    @Override
//    public String toString() {
//        return "Doctor{" +
//                "reminders=" + reminders +
//                ", doctorPatients=" + doctorPatients +
//                ", title='" + title + '\'' +
//                "} " + super.toString();
//    }
}
