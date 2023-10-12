package com.prabha.taxcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prabha.taxcalculator.Model.Tax;

@Repository
public interface TaxRepo extends JpaRepository<Tax,Integer> {
    
}
