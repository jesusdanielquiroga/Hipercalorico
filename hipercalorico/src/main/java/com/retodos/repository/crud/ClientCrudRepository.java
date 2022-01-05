/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.repository.crud;

import com.retodos.model.Client;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author jquiroga
 */
public interface ClientCrudRepository extends MongoRepository<Client, Object> {

    public Optional<Client> findByEmail(String email);

    public Optional<Client> findByEmailAndPassword(String email, String password);
}
