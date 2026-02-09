// Comment
export interface IComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: ICommentUser;
}

// User (author of comment)
export interface ICommentUser {
    id: number;
    username: string;
    fullName: string;
}


