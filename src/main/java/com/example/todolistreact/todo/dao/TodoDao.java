package com.example.todolistreact.todo.dao;

import com.example.todolistreact.todo.dto.TodoDataDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface TodoDao {
    List<TodoDataDto> selectTodoData(Long userNo);

    Boolean selectUserDataByUsername(String username);

    Long selectUserNo(String user);

    void insertTodo(TodoDataDto todoData);

    TodoDataDto selectInsertTodo(Long todoNo);

    void deleteTodo(Long todoNo);
}
