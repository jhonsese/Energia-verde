package com.project1.demospring.service;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuarioRepository;

    // Obtener todos los usuarios
    public List<Usuarios> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    // Guardar un usuario
    public Usuarios guardarUsuario(Usuarios usuario) {
        return usuarioRepository.save(usuario);
    }

    // Eliminar un usuario
    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
