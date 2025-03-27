package com.project1.demospring.repository;

import com.project1.demospring.model.Sesion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SesionRepository extends JpaRepository<Sesion, Long> {
}