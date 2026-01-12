
import './CoursesComponent.css';
import CourseComponent from "../course-component/CourseComponent.tsx";
import {coursesArray} from "../../data/coursesArray.ts";
import type {ICourse} from "../../models/ICourse.ts";



const CoursesComponent = () => {
    return (
            <div>
                {
                    coursesArray.map((course:ICourse, index:number) => {
                        return <CourseComponent course={course} key={index}/>;
                    })
                }
            </div>
    );

};

export default CoursesComponent;