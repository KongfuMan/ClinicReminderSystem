package com.ClinicReminder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClinicReminderApplication {

	public final static Logger logger = LoggerFactory.getLogger(ClinicReminderApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ClinicReminderApplication.class, args);
	}
}