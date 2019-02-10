package com.ClinicReminder.Services;

import com.ClinicReminder.Models.User;
import com.ClinicReminder.Repositories.RoleRepository;
import com.ClinicReminder.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@Primary
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // When a user tries to authenticate, this method receives the username,
    // searches the database for a record containing it,
    // and (if found) returns an instance of User.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        //Spring Security uses UserDetails for performing various authentication and role based validations
        User user = userRepository.findByUsername(username);    //check database by username
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return user;
    }
}
