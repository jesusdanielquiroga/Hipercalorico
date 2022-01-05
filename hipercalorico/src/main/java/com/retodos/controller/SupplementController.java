/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.controller;

import com.retodos.model.Supplement;
import com.retodos.service.SupplementService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jquiroga
 */
@RestController
@RequestMapping("/api/supplements")
@CrossOrigin("*")
public class SupplementController {

    @Autowired
    private SupplementService servicio;

    @GetMapping("/all")
    public List<Supplement> listAll() {
        return servicio.listAll();
    }

    @GetMapping("/{reference}")
    public Optional<Supplement> getSupplement(@PathVariable("reference") String reference) {
        return servicio.getSupplement(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Supplement create(@RequestBody Supplement gadget) {
        return servicio.create(gadget);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Supplement update(@RequestBody Supplement gadget) {
        return servicio.update(gadget);
    }

    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return servicio.delete(reference);
    }
    @GetMapping("/price/{price}")
    public List<Supplement> gadgetsByPrice(@PathVariable("price") double precio) {
        return servicio.gadgetsByPrice(precio);
    }

    @GetMapping("/description/{description}")
    public List<Supplement> findByDescriptionLike(@PathVariable("description") String description) {
        return servicio.findByDescriptionLike(description);
    }
}
