// CommentResponse

export interface CommentsResponseDummyJson {
    comments: ICommentDummyJson[]; // Масив коментарів
    total: number;       // Загальна кількість коментарів у всій колекції
    skip: number;        // Скіп (offset) (для пагінації)
    limit: number;
}

// Comment
export interface ICommentDummyJson {
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


