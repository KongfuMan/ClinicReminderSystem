package com.ClinicReminder.Services;

import com.ClinicReminder.Models.Doctor;
import com.ClinicReminder.Models.Patient;
import com.ClinicReminder.Models.Security.Role;
//import com.ClinicReminder.Models.Security.UserRole;
import com.ClinicReminder.Models.User;
import com.ClinicReminder.Security.SecurityConstants;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JWTProvider {
    private final String secret;
    private final long tokenValidityInMilliseconds;

    public JWTProvider() {
        this.secret = Base64.getEncoder().encodeToString(SecurityConstants.SECRET.getBytes());
        this.tokenValidityInMilliseconds = SecurityConstants.EXPIRATION_TIME;
    }

    // create a json web token for user
    public String createToken(final User user) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + this.tokenValidityInMilliseconds);
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.secret);
            String token = JWT.create()
                    .withJWTId(UUID.randomUUID().toString())
                    .withSubject(user.getUsername())
                    .withClaim("role",user.getRole().getName())
                    .withIssuedAt(now)
                    .withExpiresAt(validity)
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException exception) {
            //Invalid Signing configuration / Couldn't convert Claims.
            throw exception;
        }
    }

    //parse the token for username
    public UserDetails verifyToken(final String token) throws JWTVerificationException{
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(this.secret))
                .build(); //Reusable verifier instance
        DecodedJWT jwt = verifier.verify(token);
        String rolename = jwt.getClaim("role").asString();
        if (rolename == null){
            throw new JWTVerificationException("Role name does not exist!");
        }
        User user;
        if (rolename.equalsIgnoreCase("DOCTOR")){
            user = new Doctor();
        }else{
            user = new Patient();
        }
        user.setUsername(jwt.getSubject());
        user.setRole(new Role(rolename));
        return user;
    }}