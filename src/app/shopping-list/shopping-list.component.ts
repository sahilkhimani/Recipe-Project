import { Component, OnInit } from '@angular/core';
import { ShoppingEditsComponent } from './shopping-edits/shopping-edits.component';
import { IngredientModel } from '../shared/ingredients.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditsComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  constructor(private shoppingListService : ShoppingListService){}
  ingredients? : IngredientModel[];
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();  
  }

}
