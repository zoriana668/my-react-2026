import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type MyPropsType = {
    product : IProduct;
}


const MyProduct:FC<MyPropsType> = ({product}) => {
    return (
        <div className='w-3xs'>
            <h2>{product.title}. {product.price} UAH</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default MyProduct;