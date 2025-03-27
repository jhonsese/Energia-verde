package com.project1.demospring.model;

import jakarta.persistence.*;
@Entity
@Table(name = "login")
public class Sesion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Para auto-generar el ID en MySQL
    @Column(name = "id")
    private Long id;
    @Column(name = "nombre")
    private String nombre;

    @Column(name = "correo")
    private String correo;

    // Getters y Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String  correo) {
        this.correo = correo;
    }

}