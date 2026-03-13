import type {IUsersResponse} from "../models/IUsersResponse.ts";

const baseUrl = 'https://dummyjson.com';

export const getUsers = async (page: string):Promise<IUsersResponse | undefined> => {
    if(+page > 0){
        const limit = 12;
        const skip = limit * (+page) - limit;

        const response = await fetch(`${baseUrl}/users?limit=${limit}&skip=${skip}`)
            .then((value => value.json()));

        return response;
    }
}