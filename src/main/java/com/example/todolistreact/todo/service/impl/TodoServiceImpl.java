package com.example.todolistreact.todo.service.impl;

import com.example.todolistreact.todo.dao.TodoDao;
import com.example.todolistreact.todo.dto.TodoDataDto;
import com.example.todolistreact.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TodoServiceImpl implements TodoService {

    private final TodoDao todoDao;


    @Override
    public List<TodoDataDto> getTodoData() {



        return todoDao.selectTodoData();
    }
}
