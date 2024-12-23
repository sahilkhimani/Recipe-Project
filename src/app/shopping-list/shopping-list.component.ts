import { Component } from '@angular/core';
import { ShoppingEditsComponent } from './shopping-edits/shopping-edits.component';
import { IngredientModel } from '../shared/ingredients.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditsComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients : IngredientModel[] = [
    new IngredientModel('Tomato', 10),
    new IngredientModel('Potato', 5),
  ];

  onIngredientAdd(ingredientData : IngredientModel){
    this.ingredients.push(ingredientData);
  }
}
