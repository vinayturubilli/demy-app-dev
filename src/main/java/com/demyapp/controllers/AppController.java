package com.demyapp.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/Customers")
public class AppController {
    @GetMapping(value = "/login")
    @ResponseStatus(value = HttpStatus.OK)
    public void login() {
        System.out.println("login");
    }
}
