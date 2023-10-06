package com.kavin.taxcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kavin.taxcalculator.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    
}
