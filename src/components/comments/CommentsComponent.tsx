import {Link} from "react-router-dom";

const CommentsComponent = () => {
    return (
        <div>
            <li><Link to={'jsonplaceholder'}>jsonPlaceholder</Link></li>
            <li><Link to={'dummyJson'}>dummyJson</Link></li>
        </div>
    );
};

export default CommentsComponent;