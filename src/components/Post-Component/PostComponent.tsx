import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

import './PostComponent.css'

type PostPropType = {
    item: IPost
}

const PostComponent:FC<PostPropType> = ({item: {id, title, body}}) => {

    return (
        <div>
            {
                <div className='mb-10 p-7 bg-green-800' key={id}>
                    <div><span>Post ID</span> - {id}</div>

                    <div><span>Post title</span> - {title}</div>

                    <div><span>Content</span> - {body}</div>

                </div>

            }
        </div>
    );
};

export default PostComponent;