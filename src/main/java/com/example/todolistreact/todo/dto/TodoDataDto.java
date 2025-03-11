package com.example.todolistreact.todo.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TodoDataDto {
    private Long todoNo;
    private String todoContent;
    private String todoSuccess;
    private String todoDelete;
    private Long userNo;
    private String username;

}
