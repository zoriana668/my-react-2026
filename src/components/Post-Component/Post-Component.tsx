import type {FC} from "react";
import type {IPosts} from "../../models/IPosts.ts";

type PostPropType = {
    item: IPosts
}

const PostComponent:FC<PostPropType> = ({item: {id, name, difficulty, cuisine, ingredients}}) => {
    return (
        <div>
            <div key={id}>
                <h3>{name}</h3>
                <p>{difficulty}</p>
                <p>{cuisine}</p>
                <div>{ingredients}</div>
            </div>
        </div>
    );
};

export default PostComponent;