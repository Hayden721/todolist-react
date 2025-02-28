package com.example.todolistreact.todo.controller;

import com.example.todolistreact.todo.dto.TodoDataDto;
import com.example.todolistreact.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/todo")
    public ResponseEntity<List<TodoDataDto>> todoGet() {

        List<TodoDataDto> todo = todoService.getTodoData();
        log.info("todo : {}", todo);

        return ResponseEntity.ok(todo);
    }
}
