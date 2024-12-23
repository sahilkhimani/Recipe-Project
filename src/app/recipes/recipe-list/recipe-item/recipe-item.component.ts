import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipeItem: RecipeModel = { recipeName: '', recipeDescription: '', recipeImageUrl: '' };
  @Output() selectedRecipe = new EventEmitter<void>();

  onSelectedRecipe(){
    this.selectedRecipe.emit();
  }}
