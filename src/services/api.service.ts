
import axios from 'axios'
import type {ICar} from "../models/ICar.ts";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1'
});



// отримати всі cars ------------------

export const getAllCars = async ():Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    console.log(axiosResponse);
    const cars = axiosResponse.data;
    console.log(cars);
    return cars;
}


// запостити об'єкт car ------------------

export const addCar = async (car: ICar) => {
    await axiosInstance.post('/cars', car);
}
