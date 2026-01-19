import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";


type TodoPropType = {
    todo: ITodo
}

const ToDoComponent:FC<TodoPropType> = (todo) => {
    return (
        <div>

        </div>
    );
};

export default ToDoComponent;