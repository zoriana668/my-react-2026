import type {IUserJsonPlaceholder} from '../models/IUserJsonPlaceholder';


export const userService = {
    getUsersFromJsonPlaceholder: async(): Promise<IUserJsonPlaceholder[]> => {
        return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    }
}