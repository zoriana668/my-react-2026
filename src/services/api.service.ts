import type {IUsersResponse} from "../models/IUsersResponse.ts";

const baseUrl = 'https://dummyjson.com';

export const getUsers = async (page: string):Promise<IUsersResponse> => {
    const limit = 15;
    const skip = limit * (+page) - limit;

    const response = await fetch(`${baseUrl}/users?limit=${limit}&skip=${skip}`)
        .then((value => value.json()));

    return response;
}