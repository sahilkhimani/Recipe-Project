import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipeModel } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe?: RecipeModel;
  id?: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute
    , private router : Router
  ) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);  
      }
    )
  }

  AddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe?.recipeIng ?? []);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id!);
    this.router.navigate(['recipes']);
  }
}
