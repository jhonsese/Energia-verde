package com.project1.demospring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@SpringBootApplication
public class DemospringApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemospringApplication.class, args);
    }

    @GetMapping("/hola")
    public String holaMundo() {
        return "hola-mundo";
    }
}