import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { IngredientModel } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edits',
  imports: [],
  templateUrl: './shopping-edits.component.html',
  styleUrl: './shopping-edits.component.css'
})
export class ShoppingEditsComponent {
  @ViewChild('nameInput') nameInput? : ElementRef;
  @ViewChild('amountInput') amountInput? : ElementRef;

  @Output() sendIngredient = new EventEmitter<IngredientModel>();
  
  addIngredients() {
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmount = this.amountInput?.nativeElement.value;
    this.sendIngredient.emit(new IngredientModel(ingName, ingAmount));
  }
}
