import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

import './CommentComponent.css'

type CommentPropType = {
    item: IComment
}

const CommentComponent:FC<CommentPropType> = ({item}) => {
    return (
        <div>
            {
                <div className='comment-block' key={item.id}>
                    <div className='comment-email'>{item.email} </div>

                    <div className='comment-name'>{item.name}</div>

                    <div className='comment-info'>{item.body}</div>

                </div>
            }
        </div>
    );
};

export default CommentComponent;