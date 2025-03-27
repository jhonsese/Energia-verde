package com.project1.demospring.controller;

import com.project1.demospring.model.Sesion;
import com.project1.demospring.service.SesionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
@Controller
@RequestMapping("/sesion")
public class SesionController {
    private final SesionService sesionService;

    public SesionController(SesionService sesionService) {
        this.sesionService = sesionService;
    }

    @GetMapping
    public String mostrarFormularioSesion(Model model) {
        model.addAttribute("sesion", new Sesion()); // Objeto vacío para el formulario
        return "sesion"; // Asegúrate de que sesion.html existe
    }

    @PostMapping
    public String registrarUsuario(@ModelAttribute Sesion sesion) {
        sesionService.guardarUsuario(sesion);
        return "redirect:/sesion";
    }
}