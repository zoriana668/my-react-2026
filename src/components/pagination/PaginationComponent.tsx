

import './PaginationComponent.css';

import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});

    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div className='btn-block'>
            <button onClick={() => {
                if(currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }
            }}>Назад</button>


            <button onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }}>Вперед</button>
        </div>
    );
};

export default PaginationComponent;