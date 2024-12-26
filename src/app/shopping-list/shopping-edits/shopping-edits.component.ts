import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { IngredientModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edits',
  imports: [],
  templateUrl: './shopping-edits.component.html',
  styleUrl: './shopping-edits.component.css'
})
export class ShoppingEditsComponent {
  constructor(private shoppingListService : ShoppingListService){}

  @ViewChild('nameInput') nameInput? : ElementRef;
  @ViewChild('amountInput') amountInput? : ElementRef;

    addIngredients() {
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmount = this.amountInput?.nativeElement.value;
    this.shoppingListService.onIngredientAdd(new IngredientModel(ingName, ingAmount));
  }
}
