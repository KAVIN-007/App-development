package com.prabha.taxcalculator.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prabha.taxcalculator.Model.Tax;
import com.prabha.taxcalculator.Repository.TaxRepo;

@Service
public class TaxService {
    @Autowired
    public TaxRepo pr;

    public List<Tax> getProduct()
    {
        return pr.findAll();
    }
    public String postProduct(Tax pp)
    {
        pr.save(pp);
        return "posted successfully";
    }
    public String updateProduct(Tax pp)
    {
        pr.save(pp);
        return "updated successfully";
    }
    public String deleteProduct(int pid)
    {
        pr.deleteById(pid);
        return "deleted";
    }
}
