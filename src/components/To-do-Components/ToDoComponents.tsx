import type {ITodo} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";

import {getTodos} from "../../service/api.service.ts";
import ToDoComponent from "../To-do-Component/ToDoComponent.tsx";

const ToDoComponents = () => {
    const [todoArray, setTodo] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos()
            .then(response => {
                setTodo(response);
            })
    }, []);


    return (
        <div>
            {
                todoArray.map(toDo => (<ToDoComponent key={toDo.id} item={toDo}/>))
            }
        </div>
    );
};

export default ToDoComponents;