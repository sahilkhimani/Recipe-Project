import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

    private ingredients : IngredientModel[] = [];

    getIngredients(){
      return this.ingredients;
    }

    onIngredientAdd(ingredientData : IngredientModel){
      this.ingredients.push(ingredientData);
    }

    onAddShoppingList(ingredient : IngredientModel[]){
      this.ingredients.push(...ingredient);
    }
}
