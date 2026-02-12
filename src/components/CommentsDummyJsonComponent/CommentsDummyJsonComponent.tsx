import type {ICommentDummyJson} from "../../models/ICommentDummyJson.ts";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/api.service.ts";

const CommentsDummyJsonComponent = () => {

    const [commentsDummyJson, setCommentsDummyJson] = useState<ICommentDummyJson[]>([]);

    useEffect(() => {
        commentsService.getCommentsFromDummyJson().then((allComments) => setCommentsDummyJson(allComments));
    }, []);

    return (
        <div>
            {
                commentsDummyJson.map((comment) => <div key={comment.id}>{comment.id}. {comment.body} {comment.likes}</div>)
            }
        </div>
    );
};

export default CommentsDummyJsonComponent;