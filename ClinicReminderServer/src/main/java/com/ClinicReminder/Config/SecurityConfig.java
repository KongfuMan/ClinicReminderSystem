package com.ClinicReminder.Config;

import com.ClinicReminder.Security.JWTAuthenticationFilter;
import com.ClinicReminder.Services.JWTProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.ClinicReminder.Security.SecurityConstants.*;


//configure both security filters on the Spring Security filter chain
@EnableWebSecurity //(this annotation enables web security in a project)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JWTProvider tokenProvider;

    @Autowired
    private PasswordEncoder passwordEncoder(){
        return SecurityUtility.passwordEncoder();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JWTAuthenticationFilter customFilter = new JWTAuthenticationFilter();
        http.addFilterBefore(customFilter,UsernamePasswordAuthenticationFilter.class);

        http.cors()
                .and().csrf().disable()
                .authorizeRequests()
//                    .antMatchers("/admin/**").hasAuthority("ADMIN")
//                    .antMatchers("/doctor/**").hasAuthority("DOCTOR")
//                    .antMatchers("/patient/**").hasAuthority("PATIENT")
                    .antMatchers(PUBLIC_URL).permitAll()  //permit the login page to All HttpMethod.POST, LOG_IN_URL,SIGN_UP_URL,TEST_WEBSOCKET
                    .anyRequest().permitAll();

    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
