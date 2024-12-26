import { Component,  Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent{
  constructor(private shoppingListService: ShoppingListService){}
  @Input() recipe? : RecipeModel;  

  AddToShoppingList(){
    this.shoppingListService.onAddShoppingList(this.recipe?.recipeIng ?? []);
  }
}
