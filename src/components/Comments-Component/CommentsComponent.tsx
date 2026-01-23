import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../service/api.service.ts";
import CommentComponent from "../Comment-Component/CommentComponent.tsx";

const CommentsComponent = () => {
    const [commentsArray, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()
            .then(response => {
                setComment(response)
            })
    })

    return (
        <div>
            commentsArray.map((comment) => <CommentComponent key={comment.id} comment={item}/>)
        </div>
    );
};

export default CommentsComponent;