import {useEffect, useState} from "react";
import {getAllCars} from "../../services/api.service.ts";
import type {ICar} from "../../models/ICar.ts";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars()
            .then(cars => console.log(cars))
            .catch(error => console.log(error))
    }, []);


    return (
        <div>
            cars.map(car => )
        </div>
    );
};

export default CarsComponent;