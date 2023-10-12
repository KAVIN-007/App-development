package com.prabha.taxcalculator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prabha.taxcalculator.Model.Tax;
import com.prabha.taxcalculator.Service.TaxService;
import com.prabha.taxcalculator.constant.Api;

@RestController
@RequestMapping(Api.AUTH)
public class TaxController {
    @Autowired
    public TaxService ps;

    @GetMapping("/getproduct")
    public List<Tax> get()
    {
        return ps.getProduct();
    }

    @PostMapping("/postproduct")
    public String add(@RequestBody Tax pp)
    {
        return ps.postProduct(pp);
    }

    @PutMapping("/update/{pid}")
    public String update(@RequestBody Tax pp,@PathVariable int pid)
    {
        pp.setPid(pid);
        return ps.updateProduct(pp);
    }

    @DeleteMapping("/delete/{pid}")
    public String del(@PathVariable int pid)
    {
        return ps.deleteProduct(pid);
    }
}
