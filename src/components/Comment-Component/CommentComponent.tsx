import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

type CommentPropType = {
    item: IComment
}

const CommentComponent:FC<CommentPropType> = ({item}) => {
    return (
        <div>
            {
                <div key={item.id}>{item.name}</div>
            }
        </div>
    );
};

export default CommentComponent;