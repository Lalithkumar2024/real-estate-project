package com.example.realestatemgmt.repository;

import com.example.realestatemgmt.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
    List<Client> findByAgentId(Long agentId);
    Client findByEmail(String email);
}
