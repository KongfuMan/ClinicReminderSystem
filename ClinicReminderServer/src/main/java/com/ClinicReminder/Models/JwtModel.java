package com.ClinicReminder.Models;

public class JwtModel {
    private String token;

    public JwtModel(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
