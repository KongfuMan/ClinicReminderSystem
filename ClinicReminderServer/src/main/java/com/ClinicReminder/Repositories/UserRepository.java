package com.ClinicReminder.Repositories;

import com.ClinicReminder.Models.Reminder;
import com.ClinicReminder.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Transactional
public interface UserRepository extends UserBaseRepository<User> {
    public Set<Reminder> findByUserID(int userId);
}
