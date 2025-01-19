package com.rodriguez_web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class Controller {

    @RequestMapping("/list")
    public String helloController() {
        return "<h1>Hello Readers, here are the list of books I'm reading :)</h1>";
    }
}
