package com.example.todolistreact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactAppController {
    @GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        // 서버에서 인식하지 못하는 경로는 모두 index.html로 포워딩
        return "forward:/index.html";
    }
}
