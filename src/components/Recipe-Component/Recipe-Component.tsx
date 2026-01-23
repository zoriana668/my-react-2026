import type {FC} from "react";
import type {IRecipe} from "../../models/IRecipe.ts";

type RecipePropType = {
    item: IRecipe
}

const RecipeComponent:FC<RecipePropType> = ({item: {id, name, difficulty, cuisine}}) => {
    return (
        <div key={id}>
            <h3>{name}</h3>
            <p>{difficulty}</p>
            <p>{cuisine}</p>
        </div>
    );
};

export default RecipeComponent;