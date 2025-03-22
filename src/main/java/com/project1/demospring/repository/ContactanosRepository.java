package com.project1.demospring.repository;

import com.project1.demospring.model.Contactanos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactanosRepository extends JpaRepository<Contactanos, Long> {
}
