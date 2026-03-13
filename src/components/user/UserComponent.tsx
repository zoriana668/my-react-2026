
import './UserComponent.css';

import type {IUser} from "../../models/IUser.ts";


interface UserComponentProps {
    userProp: IUser
}

const UserComponent = ({userProp}: UserComponentProps) => {

    return (
        <div className='user-component-item'>
            {userProp.id}. - {userProp.username} - {userProp.email}
        </div>
    );
};

export default UserComponent;