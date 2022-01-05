/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.repository;

import com.retodos.model.Client;
import com.retodos.repository.crud.ClientCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jquiroga
 */
@Repository
public class ClientRepository {
    @Autowired
    private ClientCrudRepository crudInterface;

    public Optional<Client> getClient(String email) {
        return crudInterface.findByEmail(email);
    }

    public Client create(Client client) {
        return crudInterface.save(client);
    }

    public void update(Client client) {
        crudInterface.save(client);
    }

    public List<Client> listarClientes() {
        return crudInterface.findAll();
    }

    public boolean emailExists(String email) {
        Optional<Client> cliente = crudInterface.findByEmail(email);
        return !cliente.isEmpty();

    }

    public void delete(Client client) {
        crudInterface.delete(client);
    }

    public Optional<Client> autenticateUser(String email, String password) {
        return crudInterface.findByEmailAndPassword(email, password);
    }
}
