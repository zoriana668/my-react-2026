import type {ITodo} from "../models/ITodo.ts";

const getTodos = async():Promise<ITodo[]> => {
    const todos = await fetch(import.meta.env.VITE_API_TO_DO)
        .then(value => value.json())
    return todos;
}


export {
    getTodos
}