// Post Response
export interface PostsResponseDummyJson {
    posts: IPostDummyJson[];
    total: number;
    skip: number;
    limit: number;
}

// Post
export interface IPostDummyJson {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}


// Reactions
export interface IReactions {
    likes: number;
    dislikes: number;
}

