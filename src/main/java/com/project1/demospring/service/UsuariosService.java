package com.project1.demospring.service;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuarioRepository;

    public Page<Usuarios> obtenerUsuariosPaginados(int page, int size) {
        return usuarioRepository.findAll(PageRequest.of(page, size));
    }
}
