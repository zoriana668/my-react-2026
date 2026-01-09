
import './FamilyComponent.css';
import {coursesAndDurationArray} from "../../data/simpsonsArray.ts";
import type {ICourse} from "../../models/ICharacter.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
            <div>
                {
                    coursesAndDurationArray.map((course:ICourse, index:number) => {
                        return <CharacterComponent course={course} key={index}/>;
                    })
                }
            </div>
    );

};

export default FamilyComponent;