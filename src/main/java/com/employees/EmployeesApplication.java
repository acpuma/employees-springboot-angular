package com.employees;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class EmployeesApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeesApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedHeaders("*")
                    .allowedOrigins("http://localhost:8100,https://localhost:8100,http://localhost:9000,https://localhost:9000,http://localhost:4200,https://localhost:4200")
                    .allowCredentials(true)
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD")
                    .maxAge(3600);
            }
        };
    }

}
