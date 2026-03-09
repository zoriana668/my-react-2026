import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    const currentPage = searchParams.get('currentPage');

    return (
        <div>
            <button onClick={() => {

            }}>Назад</button>


            <button onClick={() => {

            }}>Вперед</button>
        </div>
    );
};

export default PaginationComponent;