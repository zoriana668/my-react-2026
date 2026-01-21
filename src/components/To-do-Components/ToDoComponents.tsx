import type {ITodo} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";

import {getTodos} from "../../service/api.service.ts";

const ToDoComponents = () => {
    const [todoArray, setTodo] = useState<ITodo>([]);

    useEffect((

    ))


    return (
        <div>
            {/*todoArray.map(*/}
        </div>
    );
};

export default ToDoComponents;