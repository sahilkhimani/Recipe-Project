import { Component,  Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';


@Component({
  selector: 'app-recipe-detail',
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent{
  @Input() recipe: RecipeModel = {recipeName: '', recipeDescription: '', recipeImageUrl: ''};
  

}
