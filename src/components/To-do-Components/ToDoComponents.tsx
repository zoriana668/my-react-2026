// import type {ITodo} from "../../models/ITodo.ts";
// import {useState} from "react";

import {getTodos} from "../../service/api.service.ts";

const ToDoComponents = () => {
    // const [todoArray, setTodo] = useState<ITodo>([]);

    getTodos()


    return (
        <div>

        </div>
    );
};

export default ToDoComponents;