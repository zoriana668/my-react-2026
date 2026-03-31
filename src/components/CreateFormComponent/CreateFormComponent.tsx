import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/car.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

import './CreateFormComponent.css';

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const CreateFormComponent = () => {

    const {handleSubmit, register, formState: {isValid}} = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps)
    }

    return (

        <div className={'base-container'}>
            <div className={'form-wrapper'}>

                <form onSubmit={handleSubmit(customHandler)} className={'create-form'}>
                    <h3 className={'form-heading'}>Create a car</h3>

                    <input type='text' className={'input-field input-brand'} {...register('brand')}/>
                    <input type='number' className={'input-field input-price'} {...register('price')}/>
                    <input type='number' className={'input-field input-year'} {...register('year')}/>
                    <button className={'btn-create'} disabled={!isValid}>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateFormComponent;