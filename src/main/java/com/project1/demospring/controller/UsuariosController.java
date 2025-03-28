package com.project1.demospring.controller;

import com.project1.demospring.model.Contactanos;
import com.project1.demospring.model.Usuarios;
import com.project1.demospring.service.ContactanosService;
import com.project1.demospring.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
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
        Page<Usuarios> paginaUsuarios = usuariosService.obtenerUsuariosPaginados(page, size, null, null, null, null);

        model.addAttribute("usuarios", paginaUsuarios.getContent());
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", paginaUsuarios.getTotalPages());

        return "usuarios";
    }

    @Autowired
    private ContactanosService contactanosService;

    @GetMapping("/contacto")
    public String mostrarFormularioContacto(Model model) {
        model.addAttribute("contacto", new Contactanos());
        return "usuarios"; // Nombre de la vista HTML
    }

    @PostMapping("/contacto")
    public String guardarContacto(@ModelAttribute Contactanos contacto, RedirectAttributes redirectAttributes) {
        contactanosService.guardarContacto(contacto);
        
        // Agrega un mensaje temporal que desaparecerá después de la redirección
        redirectAttributes.addFlashAttribute("successMessage", "✅ Te contactaremos en cualquier momento.");
        
        return "redirect:/contacto"; // Redirige sin parámetros en la URL
    }


    @GetMapping("/api/usuarios")
    @ResponseBody
    public ResponseEntity<?> obtenerUsuariosJSON(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "5") int size,
                                                 @RequestParam(required = false) String country,
                                                 @RequestParam(required = false) String product,
                                                 @RequestParam(required = false) String time,
                                                 @RequestParam(required = false) String idcont) {
        Page<Usuarios> paginaUsuarios = usuariosService.obtenerUsuariosPaginados(page, size, country, product, time, idcont);

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

    @GetMapping("/api/times")
    @ResponseBody
    public ResponseEntity<?> obtenerTimes() {
        List<String> times = usuariosService.obtenerTimes(); // Implementa este método en tu servicio
        return ResponseEntity.ok(times);
    }

    @GetMapping("/api/idcont")
    @ResponseBody
    public ResponseEntity<?> obtenerIdcont() {
        List<String> idcont = usuariosService.obtenerIdcont(); // Implementa este método en tu servicio
        return ResponseEntity.ok(idcont);
    }

    @GetMapping("/api/comparacion")
    @ResponseBody
    public ResponseEntity<?> obtenerValoresUsuarios(@RequestParam String country,
                                                    @RequestParam String time) {
        Map<String, Double> valores = usuariosService.obtenerValoresUsuarios(country, time);
        return ResponseEntity.ok(valores);
    }

    @GetMapping("api/comparacion-anual")
    public ResponseEntity<List<Map<String, Object>>> obtenerComparacionAnual(@RequestParam String country) {
        List<Map<String, Object>> resultado = usuariosService.obtenerResumenAnualPorPais(country);
        return ResponseEntity.ok(resultado);
    }
}

