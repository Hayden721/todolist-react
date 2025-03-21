import {useEffect, useState} from "react";
import {TodoProps} from "../types.ts";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import axios from "../config/axios.ts";


// todo 기능
const useTodo = () => {

    const user = useSelector((state: RootState) => state.name); // 유저 이름값 가져오기
    const [todos, setTodos] = useState<TodoProps[]>([]); // 사용자가 작성한 todo 값 배열로 가져오기

    // todo에 기능이 발생할 때 마다 실행된다.
    useEffect(() => {
        axios
            .get<TodoProps[]>(`/api/todo?user=${encodeURIComponent(user.username)}`)
            .then((response) => {
                setTodos(response.data)
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
            })
    }, [user]);

    // todo 추가, todoContent: 추가할 todo 내용
    const onAddTodo = (todoContent: string) => {
        if(!todoContent.trim()) return;

        axios
            .post<TodoProps>('/api/todo/add', {
                todoContent, username: user.username
            })
            .then((response) => {
                setTodos([response.data, ...todos]);
            })
            .catch((error) => {
                console.error("todo get error", error);
            })
    }

    // todo 삭제, todoNo: 삭제할 todo의 No값
    const onDeleteTodo = (todoNo: number) => {
        axios
            .delete(`/api/todo/delete/${todoNo}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.todoNo !== todoNo))
            })
            .catch((error) => {
                console.log("todo 삭제 오류", error);
            })
    }

    // todo 완료, todoNo
    const onCompleteTodo = (todoNo: number) => {
        axios
            .post(`/api/todo/complete`, {todoNo})
            .then(() => {
                // todos의 배열에서 삭제하려는 todoNo의 todo를 배열에서 없앤다.
                setTodos(todos.filter((todo) => todo.todoNo !== todoNo));
            })
            .catch((error) => {
                console.log("complete todo error : " + error);
        })
    }

    return {todos, onAddTodo, onDeleteTodo, onCompleteTodo}
}

export default useTodo;