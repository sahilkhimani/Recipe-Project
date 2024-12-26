import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModel } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent{
  @Input() recipeItem?: RecipeModel;
  constructor(private recipeService : RecipeService){}

  onSelectedRecipe(){
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }}
