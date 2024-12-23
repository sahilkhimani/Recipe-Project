export class RecipeModel{
    public recipeName: string;
    public recipeDescription : string;
    public recipeImageUrl : string;

    constructor(name : string, description : string, imageUrl : string){
        this.recipeName = name;
        this.recipeDescription = description;
        this.recipeImageUrl = imageUrl;
    }

}