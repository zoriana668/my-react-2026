import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers('1').then(({users}:IUsersResponse) => {
            setUsers(users)
        })
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} userProp={user}/>)
            }
        </div>
    );
};

export default UsersComponent;