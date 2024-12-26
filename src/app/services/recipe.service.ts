import { EventEmitter, Injectable } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';
import { IngredientModel } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();
  constructor() { }

    private recipes : RecipeModel[] = [
      new RecipeModel('Burger',
        'This is a burger',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Qq1rV_svdydH5u3O8r5ZmT8udMBnSuKeA&s',
        [new IngredientModel('Meat', 1), 
          new IngredientModel('Bun', 1)
        ]),
      new RecipeModel('Second recipe',
        'This is a pasta',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2paowiODEqEOJ082fLEWgrlBjvBlGd2GrQ&s',
        [new IngredientModel('Pasta Packet', 1), 
        new IngredientModel('Chicken', 1)
        ]
      ),
      ];

      getRecipe(){
        return this.recipes;
      }
}
