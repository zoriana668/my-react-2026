import type {IPost} from "../models/IPost.ts";

const getPosts = async():Promise<IPost[]> => {
    const posts = await fetch(import.meta.env.VITE_API_POSTS)
        .then(value => value.json())
      return posts;
}

export {
    getPosts
}