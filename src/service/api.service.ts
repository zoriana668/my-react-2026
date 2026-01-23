import type {IPosts} from "../models/IPosts.ts";

const postAPI = import.meta.env.VITE_API_POSTS;


const getPosts = async (): Promise<IPosts[]> => {
    const response = await fetch(postAPI)
    const data = await response.json();
    return data;
}

export {
    getPosts
}