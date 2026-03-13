
import './UsersPage.css';

import UsersComponent from "../components/users/UsersComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <div className='users-page-title'>UsersPage</div>

            <UsersComponent/>
        </div>
    );
};

export default UsersPage;