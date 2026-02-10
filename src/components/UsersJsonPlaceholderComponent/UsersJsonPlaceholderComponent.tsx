import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import type {IUserJsonPlaceholder} from "../../models/IUserJsonPlaceholder.ts";

import './UsersJsonPlaceholderComponent.css';

const UsersJsonPlaceholderComponent = () => {

    const [users, setUsers] = useState<IUserJsonPlaceholder[]>([]);

    useEffect(() =>{
        userService.getUsersFromJsonPlaceholder().then((allUsers) => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <div key={user.id} className='user-block'>{user.id} {user.username}</div>)
            }
        </div>
    );
};

export default UsersJsonPlaceholderComponent;