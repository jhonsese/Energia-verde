package com.project1.demospring.repository;

import com.project1.demospring.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page; 
import org.springframework.data.domain.Pageable; 
import java.util.List;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {

    @Query("SELECT DISTINCT u.country FROM Usuarios u")
    List<String> findDistinctCountries();

    @Query("SELECT DISTINCT u.product FROM Usuarios u")
    List<String> findDistinctProducts();

    @Query("SELECT DISTINCT u.time FROM Usuarios u")
    List<String> findDistinctTimes();

    @Query("SELECT DISTINCT u.idcont FROM Usuarios u")
    List<String> findDistinctIdcont();

    @Query("SELECT u FROM Usuarios u " +
           "WHERE (:country IS NULL OR u.country = :country) " +
           "AND (:product IS NULL OR u.product = :product) " +
           "AND (:time IS NULL OR u.time = :time)" + 
           "AND (:idcont IS NULL OR u.idcont = :idcont)")
    Page<Usuarios> findByCountryAndProductAndTime(
        @Param("country") String country, 
        @Param("product") String product, 
        @Param("time") String time,
        @Param("idcont") String idcont, 
        Pageable pageable
    );
}
