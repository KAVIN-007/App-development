package com.prabha.taxcalculator.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="productdata")
public class Tax {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int pid;
    private String employeeName;
    private String salary ;
    private double tax;
    private double netsalary;
}
