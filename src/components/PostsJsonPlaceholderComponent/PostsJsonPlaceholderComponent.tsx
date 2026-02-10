import type {IPostJsonPlaceholder} from "../../models/IPostJsonPlaceholder.ts";
import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";

const PostsJsonPlaceholderComponent = () => {
    const [postsJson, setPostsJson] = useState<IPostJsonPlaceholder[]>([]);

    useEffect(() => {
        postService.getPostsFromJsonPlaceholder().then(allPosts => setPostsJson(allPosts));
    }, []);

    return (
        <div>
            {
                postsJson.map((post) => <div key={post.id}>{post.id}. {post.title}</div>)
            }
        </div>
    );
};

export default PostsJsonPlaceholderComponent;