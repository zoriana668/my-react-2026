import type {IUserJsonPlaceholder} from '../models/IUserJsonPlaceholder';
import type {IUserDummyJson, UsersResponseDummyJson} from "../models/IUserDummyJson.ts";
import type {IPostJsonPlaceholder} from "../models/IPostJsonPlaceholder.ts";


export const userService = {
    getUsersFromJsonPlaceholder: async(): Promise<IUserJsonPlaceholder[]> => {
        return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    },

    getUsersFromDummyJson: async(): Promise<IUserDummyJson[]> => {
        return await fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data:UsersResponseDummyJson) => data.users)
    }
}

export const postService = {
    getPostsFromJsonPlaceholder: async(): Promise<IPostJsonPlaceholder[]> => {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
    }
}