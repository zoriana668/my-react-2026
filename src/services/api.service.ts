
import axios from 'axios'
import type {ICar} from "../models/ICar.ts";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1'
});

export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}






// export const getAllUsers = async ():Promise<IUser[]> => {
//     const {data} = await axiosInstance.get<IUser[]>('/users')
//     return data;
// }
//
//
// export const saveUser = async (user: IUser):Promise<IUser> => {
//     const {data} = await axiosInstance.post<IUser>('/users', user);
//
//     return data;
// }
