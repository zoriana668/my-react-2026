import {Link} from "react-router-dom";


const UsersComponent = () => {

    return (
        <div>


            <ul>
                <li><Link to={'jsonplaceholder'}>jsonPlaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyJson</Link></li>
            </ul>
        </div>
    );
};

export default UsersComponent;