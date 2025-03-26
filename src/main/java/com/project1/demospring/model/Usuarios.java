package com.project1.demospring.model;

import jakarta.persistence.*;

@Entity
@Table(name = "energia")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Genera el ID automáticamente en MySQL
    @Column(name = "id")
    private Long id;

    @Column(name = "country")
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

    @Column(name = "idcont") 
    private String idcont;

    // Constructor vacío (obligatorio para JPA)
    public Usuarios() {}

    // Constructor con parámetros
    public Usuarios(Long id, String country, String time, String balance, String product, String value, String unit, String idcont) {
        this.id = id;
        this.country = country;
        this.time = time;
        this.balance = balance;
        this.product = product;
        this.value = value;
        this.unit = unit;
        this.idcont = idcont;
    }

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

    public String getIdcont() {
        return idcont;
    }

    public void setIdcont(String idcont) {
        this.idcont = idcont;
    }
}