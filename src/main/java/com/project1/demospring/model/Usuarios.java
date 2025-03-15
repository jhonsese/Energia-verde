package com.project1.demospring.model;

import jakarta.persistence.*;

@Entity
@Table(name = "energia")
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Para auto-generar el ID en MySQL
    @Column(name = "id")  // Asegúrate de que coincida con el nombre en la BD
    private Long id;
    @Column(name = "country") // Si en la BD es otro nombre, cámbialo aquí
    private String country;

    @Column(name = "time")
    private String time;

    @Column(name = "balance")
    private String balance;

    @Column(name = "product")
    private String product;

    @Column(name = "value")
    private String value;

    @Column(name = "unit")
    private String unit;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
