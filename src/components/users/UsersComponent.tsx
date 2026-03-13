
import './UsersComponent.css';

import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: '1'})


    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then((response) => {
            if(response) {
                setUsers(response.users)
            }
        })
    }, [searchParams]);

    return (
        <div className="users-component-block">
            {
                users.map((user: IUser) => <UserComponent key={user.id} userProp={user}/>)
            }
        </div>
    );
};

export default UsersComponent;