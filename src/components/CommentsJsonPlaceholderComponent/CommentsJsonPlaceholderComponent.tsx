import type {ICommentJsonPlaceholder} from "../../models/ICommentsJsonPlaceholder.ts";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/api.service.ts";

const CommentsJsonPlaceholderComponent = () => {

    const [commentsJsonPlaceholder, setCommentsJsonPlaceholder] = useState<ICommentJsonPlaceholder[]>([]);

    useEffect(() => {
        commentsService.getCommentsFromJsonPlaceholder().then(allComments => setCommentsJsonPlaceholder(allComments));
    }, []);

    return (
        <div>
            {
                commentsJsonPlaceholder.map(comment => <div key={comment.id}>{comment.email} {comment.name}</div>)
            }
        </div>
    );
};

export default CommentsJsonPlaceholderComponent;