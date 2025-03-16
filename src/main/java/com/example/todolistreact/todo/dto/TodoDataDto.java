package com.example.todolistreact.todo.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TodoDataDto {
    private Long todoNo; // todo 번호
    private String todoContent; // todo 컨텐츠 내용
    private String todoSuccess; // todo 성공 여부
    private String todoDelete; // todo 삭제 여부
    private Long userNo; // 작성한 유저 번호
    private String username; // 유저 이름

}
