
import './CharacterComponent.css';
import type {FC, ReactNode} from "react";
import type {ICharacter} from "../../models/ICharacter.ts";

type MyPropsType = {
    character: ICharacter;
    children: ReactNode;
}

const CharacterComponent:FC<MyPropsType> = ({character, children}) => {
    return (
        <div className='bg-orange-500 mb-5'>
            <h2>Character name - {character.name}</h2>
            <p>Character surname - {character.surname}</p>
            <p>Character age - {character.age}</p>
            <p>Character infro - {character.info}</p>
            <img src={character.photo}/>
        </div>
    );
};

export default CharacterComponent;


age: number,
    info: string,
    photo: string