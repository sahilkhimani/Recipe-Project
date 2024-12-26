import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeModel } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes : RecipeModel[] = [];
    
    constructor(private recipeService : RecipeService){}

    ngOnInit(): void {
      this.recipes = this.recipeService.getRecipe();
    }

}
