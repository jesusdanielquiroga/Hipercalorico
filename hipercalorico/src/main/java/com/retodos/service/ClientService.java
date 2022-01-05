/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.service;

import com.retodos.model.Client;
import com.retodos.repository.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author user
 */
@Service
public class ClientService {
    @Autowired
    private ClientRepository repositorio;
    public Optional<Client> getClient(String email) {
        return repositorio.getClient(email);
    }

    public List<Client> listarClientes() {
        return repositorio.listarClientes();
    }

    public boolean emailExists(String email) {
        return repositorio.emailExists(email);
    }

    public Client autenticateUser(String email, String password) {
        Optional<Client> cliente = repositorio.autenticateUser(email, password);

        if (cliente.isEmpty()) {
            return new Client();
        } else {
            return cliente.get();
        }
    }  
        public Client create(Client client) {
        if (client.getEmail()== null) {
            return client;
        } else {
            Optional<Client> e = repositorio.getClient(client.getEmail());
            if (e.isEmpty()) {
                if (emailExists(client.getEmail()) == false) {
                    return repositorio.create(client);
                } else {
                    return client;
                }
            } else {
                return client;
            }
        }
    }
}
