/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.repository.crud;

import com.retodos.model.Supplement;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 *
 * @author jquiroga
 */
public interface SupplementCrudRepository extends MongoRepository<Supplement, String> {
    public List<Supplement> findByPriceLessThanEqual(double precio);
    //Reto 5
    @Query("{'description':{'$regex':'?0','$options':'i'}}")
    public List<Supplement> findByDescriptionLike(String description);
    
}
