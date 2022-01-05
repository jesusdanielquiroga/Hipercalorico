/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.repository;

import com.retodos.model.Supplement;
import com.retodos.repository.crud.SupplementCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jquiroga
 */
@Repository
public class SupplementRepository {

    @Autowired
    private SupplementCrudRepository crudInterface;

    public List<Supplement> listAll() {
        return crudInterface.findAll();
    }

    public Optional<Supplement> getSupplement(String reference) {
        return crudInterface.findById(reference);
    }

    public Supplement create(Supplement supplement) {
        return crudInterface.save(supplement);
    }

    public void update(Supplement supplement) {
        crudInterface.save(supplement);
    }

    public void delete(Supplement supplement) {
        crudInterface.delete(supplement);
    }
        //Reto 5
    public List<Supplement> gadgetsByPrice(double precio) {
        return crudInterface.findByPriceLessThanEqual(precio);
    }
    //Reto 5
    public List<Supplement> findByDescriptionLike(String description) {
        return crudInterface.findByDescriptionLike(description);
    }
}
