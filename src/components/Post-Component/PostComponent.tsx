import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropType = {
    item: IPost
}

const PostComponent:FC<PostPropType> = ({item}) => {


    return (
        <div>
            {
                <div className='mb-10 p-7 bg-green-800' key={item.id}>
                    {`Post ID - ${item.id} Post title - ${item.title}`}</div>

            }
        </div>
    );
};

export default PostComponent;