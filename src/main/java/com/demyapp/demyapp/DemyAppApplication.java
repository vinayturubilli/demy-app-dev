package com.demyapp.demyapp;

import com.demyapp.controllers.AppController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackageClasses = AppController.class)
@CrossOrigin
public class DemyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemyAppApplication.class, args);
	}

}
