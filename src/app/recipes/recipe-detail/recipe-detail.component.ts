import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent{
  @Input() recipe: RecipeModel = {recipeName: '', recipeDescription: '', recipeImageUrl: ''};
  

}
