package lk.ijse.pos.controller;

import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping
    public String saveCustomer(@RequestBody CustomerDTO dto){
        boolean b=service.addCustomer(dto);
        return b + "";
    }

    @PutMapping
    public String updateCustomer(@RequestBody CustomerDTO dto){
        boolean b=service.updateCustomer(dto);
        return b + "";
    }

    @DeleteMapping
    public String deleteCustomer(@RequestBody CustomerDTO dto){
        boolean b=service.updateCustomer(dto);
        return b + "";
    }

    @GetMapping
    public ArrayList<CustomerDTO> getAllCustomer(@RequestBody CustomerDTO dto){
        return service.getAllCustomers();

    }
}