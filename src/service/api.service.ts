import type {IComment} from "../models/IComment.ts";



const getComments = async (): Promise<IComment[]> => {
    const response = await fetch(import.meta.env.VITE_API_COMMENTS)
    const data = await response.json();
    return data;
}

export {
    getComments
}