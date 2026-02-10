import {useEffect, useState} from "react";
import type {IUserDummyJson} from "../../models/IUserDummyJson.ts";
import {userService} from "../../services/api.service.ts";

const UsersDummyJsonComponent = () => {

    const [users, setUsers] = useState<IUserDummyJson[]>([])

    useEffect(() => {
        userService.getUsersFromDummyJson().then((allUsers) => {
            setUsers(allUsers);
        })
    }, []);


    return (
        <div>
            {
                users.map((user => <div key={user.id}>{user.firstName} {user.lastName} (Maiden name - {user.maidenName})</div>))
            }
        </div>
    );
};

export default UsersDummyJsonComponent;