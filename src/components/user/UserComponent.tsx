import type {FC} from "react";

type UserTypeProps = {
    item: IUser
}

const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};

export default UserComponent;