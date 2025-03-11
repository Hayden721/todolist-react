package com.example.todolistreact.todo.service;

import com.example.todolistreact.todo.dto.TodoDataDto;

import java.util.List;

public interface TodoService {
    List<TodoDataDto> getTodoData(String user);

    Boolean checkUserDataByUsername(String username);

    TodoDataDto addTodo(TodoDataDto todoPost);

    void deleteTodo(Long todoNo);
}
