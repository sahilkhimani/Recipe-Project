import { IngredientModel } from "../shared/ingredients.model";

export class RecipeModel{
    public recipeName: string;
    public recipeDescription : string;
    public recipeImageUrl : string;
    public recipeIng : IngredientModel[];

    constructor(name : string, description : string, imageUrl : string, recipeIng : IngredientModel[]){
        this.recipeName = name;
        this.recipeDescription = description;
        this.recipeImageUrl = imageUrl;
        this.recipeIng = recipeIng;
    }

}