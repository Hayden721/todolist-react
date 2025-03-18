package com.example.todolistreact.todo.service;

import com.example.todolistreact.todo.dto.TodoDataDto;

import java.util.List;

public interface TodoService {
    /**
     *  todo 데이터 가져오기
     * @param user - 유저 이름
     * @return todo 데이터
     */
    List<TodoDataDto> getTodoData(String user);

    /**
     *
     * @param username
     * @return
     */
    Boolean checkUserDataByUsername(String username);

    TodoDataDto addTodo(TodoDataDto todoPost);

    void deleteTodo(Long todoNo);

    void updateCompleteTodo(TodoDataDto todoNo);

    Boolean checkDuplicateUsername(TodoDataDto response);

    void registerUser(TodoDataDto response);
}
