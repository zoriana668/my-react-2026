import {useForm} from "react-hook-form";

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const CreateFormComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();

    const customHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type='text' {...register('brand')}/>
                <input type='number' {...register('price')}/>
                <input type='number' {...register('year')}/>
                <button>Create</button>
            </form>
        </div>
    );
};

export default CreateFormComponent;