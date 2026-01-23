import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../service/api.service.ts";

const CommentsComponent = () => {
    const [commentsArray, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()

    })

    return (
        <div>

        </div>
    );
};

export default CommentsComponent;