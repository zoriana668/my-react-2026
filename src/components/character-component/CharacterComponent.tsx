
import './CharacterComponent.css';
import type {FC} from "react";

type MyPropsType = {
    course: ICourse;
}

const CharacterComponent:FC<MyPropsType> = ({course}) => {
    return (
        <div className='bg-orange-500 mb-5'>
            <h2>Course name - {course.title}</h2>
            <p>Course duration - {course.monthDuration}</p>
        </div>
    );
};

export default CharacterComponent;