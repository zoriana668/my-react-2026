
import './CoursesComponent.css';
import {coursesAndDurationArray} from "../../data/course.ts";
import type {ICourse} from "../../models/ICourse.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
            <div>
                {
                    coursesAndDurationArray.map((course:ICourse, index:number) => {
                        return <CourseComponent course={course} key={index}/>;
                    })
                }
            </div>
    );

};

export default CoursesComponent;