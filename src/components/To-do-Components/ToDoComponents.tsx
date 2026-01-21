import type {ITodo} from "../../models/ITodo.ts";
import {useState} from "react";

const ToDoComponents = () => {
    const [todoArray, setTodo] = useState<ITodo>([]);

    getTodos()

    return (
        <div>

        </div>
    );
};

export default ToDoComponents;