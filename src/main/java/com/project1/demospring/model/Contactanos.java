package com.project1.demospring.model;

import jakarta.persistence.*;

@Entity
@Table(name = "contactanos")
public class Contactanos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "email")
    private String email;
    
    @Column(name = "comentario")
    private String comentario;

    // Constructor vacío
    public Contactanos() {}

    // Constructor con parámetros
    public Contactanos(String nombre, String email, String comentario) {
        this.nombre = nombre;
        this.email = email;
        this.comentario = comentario;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getComentario() { return comentario; }
    public void setComentario(String comentario) { this.comentario = comentario; }
}
