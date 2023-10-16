package com.prabha.taxcalculator.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prabha.taxcalculator.Model.User;
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}
