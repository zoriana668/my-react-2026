import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

type CarPropType = {
    item: ICar
}

const CarComponent:FC<CarPropType> = ({item}) => {


    return (
        <div>
            <div>{item.id} {item.brand} - {item.price}</div>
        </div>
    );
};

export default CarComponent;