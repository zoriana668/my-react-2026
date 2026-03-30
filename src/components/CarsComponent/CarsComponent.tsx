import {useEffect, useState} from "react";
import {getAllCars} from "../../services/api.service.ts";
import type {ICar} from "../../models/ICar.ts";
import CarComponent from "../CarComponent/CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars()
            .then(cars => {
                setCars(cars);
            })
    }, []);


    return (
        <div>
            {
                cars.map((car)=>  <CarComponent key={car.id} item={car}/>)
            }
        </div>
    );
};

export default CarsComponent;