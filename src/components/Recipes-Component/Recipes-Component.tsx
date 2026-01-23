import {useEffect, useState} from "react";
import type {IRecipe} from "../../models/IRecipe.ts";
import {getRecipe} from "../../service/api.service.ts";
import RecipeComponent from "../Recipe-Component/Recipe-Component.tsx";

const RecipesComponent = () => {
    const [recipesArray, setRecipe] = useState<IRecipe>([])
    useEffect(() => {
        getRecipe()
            .then(response => {
                setRecipe(response);
            })
    }, []);


    return (
        <div>
            {
                recipesArray.map((recipe) => (<RecipeComponent key={recipe.id}  item={recipe}/>))
            }
        </div>
    );
};

export default RecipesComponent;