import type {FC} from "react";
import type {IPosts} from "../../models/IPosts.ts";

type PostPropType = {
    item: IPosts
}

const PostComponent:FC<PostPropType> = ({item: {title, views, body}}) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p>{views}</p>
                <div>{body}</div>
            </div>
        </div>
    );
};

export default PostComponent;