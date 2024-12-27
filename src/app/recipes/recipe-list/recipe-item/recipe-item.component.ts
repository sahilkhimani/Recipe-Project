import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModel } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent{
  @Input() recipeItem?: RecipeModel;
  @Input() index? : number;
}
