package com.ClinicReminder.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Comparator;

@Entity
@Table(name = "Reminder")
public class Reminder {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(name = "reminder_id")
    private int reminderId;
    private String description;

    private long create_at;
    private long duration;
    private int priority;

    @Column(name="is_done")
    private boolean isDone = false;

    public Reminder() {
    }

    public Reminder(Reminder other) {
        this.reminderId = other.reminderId;
        this.description = other.description;
        this.create_at = other.create_at;
        this.duration = other.duration;
        this.priority = other.priority;
        this.isDone = other.isDone;
        this.patient = other.patient;
        this.doctor = other.doctor;
        this.patientName = other.patientName;
        this.doctorName = other.doctorName;
    }

    public Reminder(String description, long create_at, long duration, int priority, boolean isDone) {
        this.description = description;
        this.create_at = create_at;
        this.duration = duration;
        this.priority = priority;
        this.isDone = isDone;
    }

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private Patient patient;   //the users include a doctors that sent it

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @Transient
    private String doctorName;

    @Transient
    private String patientName;

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public boolean isDone() {
        return isDone;
    }

    public int getReminderId() {
        return reminderId;
    }

//    public void setReminderId(int reminderId) {
//        this.reminderId = reminderId;
//    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCreate_at() {
        return create_at;
    }

    public void setCreate_at(long create_at) {
        this.create_at = create_at;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

//    @Override
//    public String toString() {
//        return "Reminder{" +
//                "reminderId=" + reminderId +
//                ", description='" + description + '\'' +
//                ", create_at=" + create_at +
//                ", duration=" + duration +
//                ", priority=" + priority +
//                ", isDone=" + isDone +
//                ", doctorName='" + (doctor != null? doctor.getUsername():"null") +
//                ", patientName='" + (patient != null? patient.getUsername():"null") +
//                '}';
//    }

    public static Comparator<Reminder> timeComparator = new Comparator<Reminder>() {
        @Override
        public int compare(Reminder o1, Reminder o2) {
            return (int) (o2.getCreate_at() - o1.getCreate_at());    //lastest Reminder at front
        }
    };

    public static Comparator<Reminder> priorityComparator = new Comparator<Reminder>() {
        @Override
        public int compare(Reminder o1, Reminder o2) {
            return (int) (o1.getCreate_at() - o2.getCreate_at());    //hight prioirity at front
        }
    };
}
