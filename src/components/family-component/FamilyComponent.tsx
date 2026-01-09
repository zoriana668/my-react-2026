
import './FamilyComponent.css';
import CharacterComponent from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/simpsonsArray.ts";
import type {ICharacter} from "../../models/ICharacter.ts";

const FamilyComponent = () => {
    return (
            <div>
                {
                    simpsons.map((character:ICharacter, index:number) => {
                        return <CharacterComponent character={character} key={index}>
                            {character.info}
                        </CharacterComponent>;
                    })
                }
            </div>
    );

};

export default FamilyComponent;