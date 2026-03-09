import type {IUser} from "../../models/IUser.ts";


interface UserComponentProps {
    userProp: IUser
}

const UserComponent = ({userProp}: UserComponentProps) => {

    return (
        <div>
            {userProp.id} - {userProp.username}
        </div>
    );
};

export default UserComponent;