package com.ClinicReminder.Security;

import com.ClinicReminder.Exceptions.InvalidJwtException;
import com.ClinicReminder.Services.CustomUserDetailsService;
import com.ClinicReminder.Services.JWTProvider;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

import static com.ClinicReminder.Security.SecurityConstants.HEADER_STRING;
import static com.ClinicReminder.Security.SecurityConstants.SECRET;
import static com.ClinicReminder.Security.SecurityConstants.TOKEN_PREFIX;

// responsible for user authorization
// when user make a request, validate its jwt first
// (BasicAuthenticationFilter extends OncePerRequestFilter)
// BasicAuthenticationFilter is responsible for
// processing basic authentication credentials presented in HTTP headers
public class JWTAuthenticationFilter extends GenericFilterBean { //once per request

    private JWTProvider jwtProvider = new JWTProvider();

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException{
        if (servletRequest instanceof HttpServletRequest && servletResponse instanceof HttpServletResponse){
            HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
            String jwt = resolveToken(httpServletRequest);
            if (jwt != null) {
                Authentication authentication = getAuthentication(jwt);
                if (authentication != null){
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
            filterChain.doFilter(servletRequest, servletResponse);
            this.resetAuthenticationAfterRequest(); //?why reset?

        }else {
            throw new ServletException("JwtAuthenticationFilter just supports HTTP requests");
        }
    }

    private void resetAuthenticationAfterRequest() {
        SecurityContextHolder.getContext().setAuthentication(null);
    }

    //resolve header
    private static String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(HEADER_STRING);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String jwt) throws InvalidJwtException{
        UserDetails userDetails = jwtProvider.verifyToken(jwt);
        return new UsernamePasswordAuthenticationToken(userDetails, "",
                userDetails.getAuthorities());
    }

}
