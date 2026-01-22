import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropType = {
    post: IPost
}

const PostComponent:FC<PostPropType> = ({post}) => {


    return (
        <div>

        </div>
    );
};

export default PostComponent;