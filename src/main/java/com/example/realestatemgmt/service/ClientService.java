package com.example.realestatemgmt.service;

import com.example.realestatemgmt.model.Client;
import com.example.realestatemgmt.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }

    public List<Client> findByAgentId(Long agentId) {
        return clientRepository.findByAgentId(agentId);
    }

    public Client findByEmail(String email) {
        return clientRepository.findByEmail(email);
    }

    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}

