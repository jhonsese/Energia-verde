package com.project1.demospring.controller;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@Controller
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @GetMapping("/usuarios")
    public String listarUsuarios(Model model) {
        List<Usuarios> listaUsuarios = usuariosService.obtenerUsuarios();
        model.addAttribute("usuarios", listaUsuarios);
        return "usuarios"; // Retorna la vista usuarios.html en templates
    }
}
