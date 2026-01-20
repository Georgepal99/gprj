package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.History;
import com.example.demo.service.HistoryService;

@RestController
@RequestMapping("/api/history")
public class HistoryController {

    private final HistoryService service;

    public HistoryController(HistoryService service) {
        this.service = service;
    }



    // GET /api/history/customer/{customerId}
    @GetMapping("/customer/{customerId}")
    public List<History> getHistoryByCustomer(
            @PathVariable Integer customerId) {
        return service.findByCustomer(customerId);
    }

  

    // POST /api/history/customer/{customerId}
    @PostMapping("/customer/{customerId}")
    public History createHistory(
            @PathVariable Integer customerId,
            @RequestBody History history) {
        return service.create(customerId, history);
    }



    // DELETE /api/history/{historyId}
    @DeleteMapping("/{historyId}")
    public void deleteHistory(@PathVariable Integer historyId) {
        service.delete(historyId);
    }
}
