package com.example.todolistreact.todo.controller;

import com.example.todolistreact.todo.dto.TodoDataDto;
import com.example.todolistreact.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@Slf4j
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todo")
    public ResponseEntity<List<TodoDataDto>> todoGet(@RequestParam String user) {
        log.info("/todo : {}", user);
        List<TodoDataDto> todo = todoService.getTodoData(user);
        log.info("todo : {}", todo);

        return ResponseEntity.ok(todo);
    }
    @PostMapping("/todo/add")
    public ResponseEntity<?> todoAdd(@RequestBody TodoDataDto todoPost) {
        log.info("todo content : {}, {} ", todoPost.getTodoContent(), todoPost.getUsername());

        TodoDataDto todo = todoService.addTodo(todoPost);
        return ResponseEntity.ok(todo);
    }

    @DeleteMapping("/todo/delete/{todoNo}")
    public ResponseEntity<?> todoDelete(@PathVariable Long todoNo) {

        log.info("del toodoNo : {}", todoNo);
        todoService.deleteTodo(todoNo);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/user-check")
    public ResponseEntity<Boolean> userCheck(@RequestBody Map<String, String> response) {
        log.info("responseUserData : {}", response);
        String username = response.get("usernameValue");
        log.info("user : {}", username);

        Boolean checkUser = todoService.checkUserDataByUsername(username);
        log.info("checkUser : {}", checkUser);

    return ResponseEntity.ok(checkUser);
    }
}
