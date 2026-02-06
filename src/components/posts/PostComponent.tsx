import {Link} from "react-router-dom";

const PostComponent = () => {
    return (
        <div>
           <ul>
               <li><Link to={'dummyjson'}>dummyJson</Link></li>
               <li><Link to={'jsonplaceholder'}>jsonPlaceholder</Link></li>
           </ul>
        </div>
    );
};

export default PostComponent;