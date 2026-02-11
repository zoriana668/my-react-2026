import type {IPostDummyJson} from "../../models/IPostDummyJson.ts";
import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";

const PostsDummyJsonComponent = () => {

    const [postsDummyJson, setPostsDummyJson] = useState<IPostDummyJson[]>([]);

    useEffect(() => {
        postService.getPostsFromDummyJson().then(dummyPosts => setPostsDummyJson(dummyPosts));
    }, []);

    return (
        <div>
            {
                postsDummyJson.map((post) => <div key={post.id}>{post.title} ({post.views} views)</div>)
            }
        </div>
    );
};

export default PostsDummyJsonComponent;