import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";


type TodoPropType = {
    item: ITodo
}

const ToDoComponent:FC<TodoPropType> = ({item}) => {
    return (
        <div>
            <div key={item.id}>{item.title}</div>
        </div>
    );
};

export default ToDoComponent;