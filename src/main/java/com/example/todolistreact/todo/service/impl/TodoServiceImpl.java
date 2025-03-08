package com.example.todolistreact.todo.service.impl;

import com.example.todolistreact.todo.dao.TodoDao;
import com.example.todolistreact.todo.dto.TodoDataDto;
import com.example.todolistreact.todo.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

@Slf4j
public class TodoServiceImpl implements TodoService {

    private final TodoDao todoDao;

    public TodoServiceImpl (TodoDao todoDao) {
        this.todoDao = todoDao;
    }

    @Override
    public List<TodoDataDto> getTodoData(String user) {

        Long userNo = todoDao.selectUserNo(user);

        return todoDao.selectTodoData(userNo);
    }

    @Override
    public Boolean checkUserDataByUsername(String username) {
        log.info("user checking : {}", todoDao.selectUserDataByUsername(username) );
        return  todoDao.selectUserDataByUsername(username);
    }
}
