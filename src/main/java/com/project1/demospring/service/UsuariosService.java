package com.project1.demospring.service;

import com.project1.demospring.model.Usuarios;
import com.project1.demospring.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    public List<String> obtenerPaises() {
        return usuariosRepository.findDistinctCountries();
    }

    public List<String> obtenerProductos() {
        return usuariosRepository.findDistinctProducts();
    }

    public List<String> obtenerTimes() {
        return usuariosRepository.findDistinctTimes();
    }

    public List<String> obtenerIdcont() {
        return usuariosRepository.findDistinctIdcont();
    }

    public Page<Usuarios> obtenerUsuariosPaginados(int page, int size, String country, String product, String time, String idcont) {
        Pageable pageable = PageRequest.of(page, size);
        return usuariosRepository.findByCountryAndProductAndTime(country, product, time, idcont, pageable);
    }

    public Map<String, Double> obtenerValoresUsuarios(String country, String time) {
        List<Object[]> resultados = usuariosRepository.findProductAndValueByCountryAndTime(country, time);
        Map<String, Double> valoresPorProducto = new HashMap<>();
        if (resultados == null) {
            return Collections.emptyMap();
        }

        for (Object[] row : resultados) {
            String product = (String) row[0];   // Nombre del producto
            Double value = Double.valueOf((String) row[1]); // ✅ Convierte de String a Double


            // Valor de energía
            valoresPorProducto.put(product, value);
        }

        return valoresPorProducto;
    }


    public List<Map<String, Object>> obtenerResumenAnualPorPais(String country) {
        List<Object[]> resultados = usuariosRepository.findAnnualSummaryByCountry(country);

        // Convertir el resultado en una lista de Map<String, Object> para JSON
        List<Map<String, Object>> response = new ArrayList<>();
        for (Object[] fila : resultados) {
            Map<String, Object> map = new HashMap<>();
            map.put("year", fila[0]);  // Año
            map.put("product", fila[1]); // Tipo de energía
            map.put("total_energia", fila[2]); // Total energía producida
            response.add(map);
        }

        return response;
    }
}