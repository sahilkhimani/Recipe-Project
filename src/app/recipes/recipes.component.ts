import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeModel } from './recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, RecipeDetailComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe? : RecipeModel;

  constructor(private recipeService : RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe : RecipeModel)=>{
      this.selectedRecipe = recipe;
    });
  }
}
