import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/car.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

import './CreateFormComponent.css';
import '../Menu/General.css';

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const CreateFormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps)
    }

    return (

        <div className={'base-container'}>
            <div className={'form-wrapper'}>

                <form onSubmit={handleSubmit(customHandler)} className={'create-form'}>
                    <h3 className={'form-heading'}>Create a car</h3>

                    <div className={'input-wrapper'}>
                        <label htmlFor={'brand'}>
                            Type a brand
                        </label>
                        <input type='text' id='brand' className={'input-field input-brand'} {...register('brand')}/>
                        {errors.brand && <div className={'error-message'}>{errors.brand.message}</div>}
                    </div>


                    <div className={'input-wrapper'}>
                        <label htmlFor={'price'}>
                            Type a price
                        </label>
                        <input type='number' id='price' className={'input-field input-price'} {...register('price')}/>
                        {errors.price && <div className={'error-message'}>{errors.price.message}</div>}
                    </div>

                    <div className={'input-wrapper'}>
                        <label htmlFor={'year'}>
                            Type a year
                        </label>
                        <input type='number' id='year' className={'input-field input-year'} {...register('year')}/>
                        {errors.year && <div className={'error-message'}>{errors.year.message}</div>}
                    </div>

                    <button className={'btn-create'} disabled={!isValid}>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateFormComponent;