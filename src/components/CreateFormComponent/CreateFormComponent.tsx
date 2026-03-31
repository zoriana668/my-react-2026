import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/car.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

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
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type='text' {...register('brand')}/>
                <input type='number' {...register('price')}/>
                <input type='number' {...register('year')}/>
                <button disabled={!isValid}>Create</button>
            </form>
        </div>
    );
};

export default CreateFormComponent;