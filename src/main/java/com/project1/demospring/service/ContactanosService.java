package com.project1.demospring.service;

import com.project1.demospring.model.Contactanos;
import com.project1.demospring.repository.ContactanosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactanosService {

    @Autowired
    private ContactanosRepository contactanosRepository;

    public void guardarContacto(Contactanos contacto) {
        contactanosRepository.save(contacto);
    }
}

