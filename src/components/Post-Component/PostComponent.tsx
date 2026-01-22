import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropType = {
    item: IPost
}

const PostComponent:FC<PostPropType> = ({item}) => {


    return (
        <div>
            {
                <div key={post.id}>`Post title - ${post.title}`</div>
            }
        </div>
    );
};

export default PostComponent;