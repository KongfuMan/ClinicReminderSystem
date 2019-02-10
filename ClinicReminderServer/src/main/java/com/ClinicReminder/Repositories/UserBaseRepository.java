package com.ClinicReminder.Repositories;

import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface UserBaseRepository<T extends User> extends JpaRepository<T ,Integer> {
    public User findByUsername(String userName);
}
