import type {IRecipe} from "../models/IRecipe.ts";

const recipeAPI = import.meta.env.VITE_API_RECIPES;


const getRecipe = async (): Promise<IRecipe[]> => {
    const response = await fetch(recipeAPI)
    const data = await response.json();
    return data;
}

export {
    getRecipe
}