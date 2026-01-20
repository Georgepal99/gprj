package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Customer;
import com.example.demo.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }


    // GET /api/customers
    @GetMapping
    public List<Customer> getAllCustomers() {
        return service.findAll();
    }

    // GET /api/customers/{id}
    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Integer id) {
        return service.findById(id);
    }

    

    // POST /api/customers
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return service.create(customer);
    }

   

    // PUT /api/customers/{id}
    @PutMapping("/{id}")
    public Customer updateCustomer(
            @PathVariable Integer id,
            @RequestBody Customer customer) {
        return service.update(id, customer);
    }

  

    // DELETE /api/customers/{id}
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Integer id) {
        service.delete(id);
    }
}
