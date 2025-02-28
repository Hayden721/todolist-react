package com.example.todolistreact.todo.dao;

import com.example.todolistreact.todo.dto.TodoDataDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoDao {
    List<TodoDataDto> selectTodoData();
}
