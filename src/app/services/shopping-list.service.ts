import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
    editingId = new Subject<number>();
    private ingredients : IngredientModel[] = [];

    getIngredients(){
      return this.ingredients;
    }

    getIngredientById(id: number){
      return this.ingredients[id];
    }

    onIngredientAdd(ingredientData : IngredientModel){
      this.ingredients.push(ingredientData);
    }

    onAddShoppingList(ingredient : IngredientModel[]){
      this.ingredients.push(...ingredient);
    }
}
