import type {IUserJsonPlaceholder} from '../models/IUserJsonPlaceholder';
import type {IUserDummyJson, UsersResponseDummyJson} from "../models/IUserDummyJson.ts";
import type {IPostJsonPlaceholder} from "../models/IPostJsonPlaceholder.ts";
import type {IPostDummyJson, PostsResponseDummyJson} from "../models/IPostDummyJson.ts";
import type {ICommentJsonPlaceholder} from "../models/ICommentsJsonPlaceholder.ts";
import type {ICommentDummyJson, CommentsResponseDummyJson} from "../models/ICommentDummyJson.ts";


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
    },

    getPostsFromDummyJson: async(): Promise<IPostDummyJson[]> => {
        return await fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data:PostsResponseDummyJson) => data.posts)
    }
}


export const commentsService = {
    getCommentsFromJsonPlaceholder: async (): Promise<ICommentJsonPlaceholder[]> => {
        return await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
    },

    getCommentsFromDummyJson: async(): Promise<ICommentDummyJson[]> => {
        return await fetch('https://dummyjson.com/comments')
        .then(res => res.json())
            .then((data:CommentsResponseDummyJson) => data.comments)
    }
}