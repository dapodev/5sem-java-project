package by.dapo.backend.controllers.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class SayHello {
    @PostMapping (value = "/guys")
    public String getHello() {
        return "Hello, guys";
    };
}
