import {useEffect} from "react";
import {getAllCars} from "../../services/api.service.ts";

const CarsComponent = () => {
    useEffect(() => {
        getAllCars()
            .then(cars => console.log(cars))
            .catch(error => console.log(error))
    }, []);


    return (
        <div>

        </div>
    );
};

export default CarsComponent;