package com.project1.demospring.controller;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Map;

@Controller
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @GetMapping("/usuarios")
    public String listarUsuarios(Model model,
                                 @RequestParam(defaultValue = "0") int page,
                                 @RequestParam(defaultValue = "5") int size) {
        Page<Usuarios> paginaUsuarios = usuariosService.obtenerUsuariosPaginados(page, size, null, null);

        model.addAttribute("usuarios", paginaUsuarios.getContent());
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", paginaUsuarios.getTotalPages());

        return "usuarios";
    }

    @GetMapping("/api/usuarios")
    @ResponseBody
    public ResponseEntity<?> obtenerUsuariosJSON(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "5") int size,
                                                 @RequestParam(required = false) String country,
                                                 @RequestParam(required = false) String product) {
        Page<Usuarios> paginaUsuarios = usuariosService.obtenerUsuariosPaginados(page, size, country, product);

        return ResponseEntity.ok().body(Map.of(
            "usuarios", paginaUsuarios.getContent(),
            "currentPage", page,
            "totalPages", paginaUsuarios.getTotalPages()
        ));
    }

    @GetMapping("/api/paises")
    @ResponseBody
    public ResponseEntity<?> obtenerPaises() {
        List<String> paises = usuariosService.obtenerPaises();
        return ResponseEntity.ok(paises);
    }

    @GetMapping("/api/productos")
    @ResponseBody
    public ResponseEntity<?> obtenerProductos() {
        List<String> productos = usuariosService.obtenerProductos(); // Implementa este método en tu servicio
        return ResponseEntity.ok(productos);
    }
}
