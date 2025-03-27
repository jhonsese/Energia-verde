package com.project1.demospring.service;

import com.project1.demospring.model.Sesion;
import com.project1.demospring.repository.SesionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SesionService {
    private final SesionRepository sesionRepository;

    public SesionService(SesionRepository sesionRepository) {
        this.sesionRepository = sesionRepository;
    }


    public void guardarUsuario(Sesion sesion) {
        sesionRepository.save(sesion); // Guarda el usuario en la base de datos
    }
}
