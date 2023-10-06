package com.kavin.taxcalculator.Service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kavin.taxcalculator.Model.User;
import com.kavin.taxcalculator.Model.enumerate.Role;
import com.kavin.taxcalculator.Repository.UserRepo;
import com.kavin.taxcalculator.dto.Response.AuthenticationResponse;
import com.kavin.taxcalculator.dto.request.AuthenticationRequest;
import com.kavin.taxcalculator.dto.request.RegisterRequest;
import com.kavin.taxcalculator.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService  {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByUsername(request.getUsername());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }
}
