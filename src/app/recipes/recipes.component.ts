import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, CommonModule, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers : []
})
export class RecipesComponent {

}
