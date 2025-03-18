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

    @Override
    public TodoDataDto addTodo(TodoDataDto todoPost) {
        Long userNo = todoDao.selectUserNo(todoPost.getUsername());
        TodoDataDto todoData = new TodoDataDto();
        todoData.setTodoContent(todoPost.getTodoContent());
        todoData.setTodoDelete("n");
        todoData.setTodoSuccess("n");
        todoData.setUserNo(userNo);

        log.info("todoData : {}", todoData);

        // 데이터 DB에 삽입
        todoDao.insertTodo(todoData);

        Long todoNo = todoData.getTodoNo();
        log.info("todoNo : {}", todoNo);

        return todoDao.selectInsertTodo(todoData.getTodoNo());
    }

    @Override
    public void deleteTodo(Long todoNo) {
        todoDao.deleteTodo(todoNo);
    }

    @Override
    public void updateCompleteTodo(TodoDataDto todoNo) {
        todoDao.updateCompleteTodo(todoNo.getTodoNo());
    }

    @Override
    public Boolean checkDuplicateUsername(TodoDataDto response) {
        return todoDao.selectDuplicateUsername(response.getUsername());
    }

    @Override
    public void registerUser(TodoDataDto response) {
        boolean isDuplicate = todoDao.selectDuplicateUsername(response.getUsername());
        if(!isDuplicate){
            todoDao.insertUser(response.getUsername());
        }
    }
}
