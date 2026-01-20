package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.History;

public interface HistoryRepository extends JpaRepository<History, Integer> {

    List<History> findByCustomerId(Integer customerId);
}