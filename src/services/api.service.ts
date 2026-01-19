import type {IUser} from "../models/IUser.ts";


const getUsers = async ():Promise<IUser[]> => {
    const users = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
    return users;
}

const getUser = async(id: string):Promise<IUser> => {
    const user = await fetch(import.meta.env.VITE_API_URL + '/' + id)
        .then(value => value.json())
    return user;
}

export {
    getUsers,
    getUser
}