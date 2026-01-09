
import './CharacterComponent.css';
import type {FC, ReactNode} from "react";
import type {ICharacter} from "../../models/ICharacter.ts";

type MyPropsType = {
    character: ICharacter;
    children: ReactNode;
}

const CharacterComponent:FC<MyPropsType> = ({character, children}) => {
    return (
        <div className='character-block bg-orange-500'>
            <h2 className='text-center uppercase'>{character.name} {character.surname}</h2>
            <img src={character.photo} alt={character.name}/>
            <p>Character age - {character.age}</p>

            <p>Character info - {children}</p>

        </div>
    );
};

export default CharacterComponent;