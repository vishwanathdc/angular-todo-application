package com.vishwanath.rest.services.restfulwebservices.helloworld;

import com.vishwanath.rest.services.restfulwebservices.helloworld.HelloWorldBean;
import org.springframework.web.bind.annotation.*;

//controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
    //GET
    //URI - /hello-world
    //method hello-world
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "hello world!";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("hello world!");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean HelloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
