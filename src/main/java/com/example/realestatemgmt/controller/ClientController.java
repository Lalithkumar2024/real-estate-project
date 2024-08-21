package com.example.realestatemgmt.controller;

import com.example.realestatemgmt.model.Client;
import com.example.realestatemgmt.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/add")
    public ResponseEntity<Client> addClient(@RequestBody Client client) {
        Client savedClient = clientService.saveClient(client);
        return ResponseEntity.ok(savedClient);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        return clientService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/agent/{agentId}")
    public ResponseEntity<List<Client>> getClientsByAgentId(@PathVariable Long agentId) {
        List<Client> clients = clientService.findByAgentId(agentId);
        return ResponseEntity.ok(clients);
    }

    @GetMapping("/all")
    public List<Client> getAllClients() {
        return clientService.findAllClients();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
        return clientService.findById(id)
                .map(client -> {
                    client.setFirstName(clientDetails.getFirstName());
                    client.setLastName(clientDetails.getLastName());
                    client.setEmail(clientDetails.getEmail());
                    client.setPhoneNumber(clientDetails.getPhoneNumber());
                    client.setAddress(clientDetails.getAddress());
                    client.setTransactionHistory(clientDetails.getTransactionHistory());
                    client.setUpdatedAt(clientDetails.getUpdatedAt());
                    Client updatedClient = clientService.saveClient(client);
                    return ResponseEntity.ok(updatedClient);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }
}
