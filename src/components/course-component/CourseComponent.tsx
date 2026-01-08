
import './CourseComponent.css';
import type {FC} from "react";
import type {ICourse} from "../../models/ICourse.ts";

type MyPropsType = {
    course: ICourse;
}

const CourseComponent:FC<MyPropsType> = ({course}) => {
    return (
        <div className='bg-orange-500 mb-5'>
            <h2>Course name - {course.title}</h2>
            <p>Course duration - {course.monthDuration}</p>
        </div>
    );
};

export default CourseComponent;