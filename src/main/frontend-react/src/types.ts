export interface TodoProps {
    todoNo: number;
    todoContent: string;
    isCompleted: boolean;
}

export interface TodoInputProps {
    newTodo: string;
    setNewTodo: (value: string) => void;
    addTodo: (todo: string) => void;
}

export interface TodoListProps {
    todos: TodoProps[]; // TODO List(배열)
    deleteTodoFunc: (todoNo:number) => void;
    completeTodoFunc: (todoNo: number) => void;
}

export interface DeleteTodoProps {
    todoData: TodoProps;
    deleteTodoFunc: (todoNo: number) => void;

}

export interface CompleteTodoProps {
    todoData: TodoProps;
    completeTodoFunc: (todoNo: number) => void;

}
