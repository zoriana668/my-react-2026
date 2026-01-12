
import './CourseComponent.css';
import type {FC} from "react";
import type {ICourse} from "../../models/ICourse.ts";

type MyPropsType = {
    course: ICourse;
}

const CourseComponent:FC<MyPropsType> = ({course}) => {
    return (
        <div className='course-block bg-green-700'>
            <h2 className='text-center uppercase'>{course.title}</h2>
            <p className = 'text-center'>Month Duration - {course.monthDuration}</p>
            <p className = 'text-center'>Hour Duration - {course.hourDuration}</p>

            <ul>
                {course.modules.map((module, index) =>
                    <li key={index}>{module}</li>
                )}
            </ul>
        </div>
    );
};

export default CourseComponent;