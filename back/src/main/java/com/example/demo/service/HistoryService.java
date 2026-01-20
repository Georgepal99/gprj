package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.History;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.HistoryRepository;

@Service
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final CustomerRepository customerRepository;

    public HistoryService(HistoryRepository historyRepository,
                          CustomerRepository customerRepository) {
        this.historyRepository = historyRepository;
        this.customerRepository = customerRepository;
    }

    public List<History> findByCustomer(Integer customerId) {
        return historyRepository.findByCustomerId(customerId);
    }

    public History create(Integer customerId, History history) {

        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        history.setCustomer(customer);
        history.setDatetime(LocalDateTime.now());

        return historyRepository.save(history);
    }

    public void delete(Integer historyId) {
        historyRepository.deleteById(historyId);
    }
}