package com.project1.demospring.service;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    public List<String> obtenerPaises() {
        return usuariosRepository.findDistinctCountries();
    }

    public List<String> obtenerProductos() {
        return usuariosRepository.findDistinctProducts();
    }

    public List<String> obtenerTimes() {
        return usuariosRepository.findDistinctTimes();
    }

    public List<String> obtenerIdcont() {
        return usuariosRepository.findDistinctIdcont();
    }

    public Page<Usuarios> obtenerUsuariosPaginados(int page, int size, String country, String product, String time, String idcont) {
        Pageable pageable = PageRequest.of(page, size);
        return usuariosRepository.findByCountryAndProductAndTime(country, product, time, idcont, pageable);
    }
}