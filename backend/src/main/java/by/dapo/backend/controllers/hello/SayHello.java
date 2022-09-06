package by.dapo.backend.controllers.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(value = "http://localhost:3000")
@RestController
public class SayHello {
    @GetMapping(value = "/hello")
    public String getHello() {
        return "Hello, guys";
    };
}
