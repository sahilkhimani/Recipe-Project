import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeModel } from '../recipe-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes : RecipeModel[] = [
    new RecipeModel('First recipe', 'This is a first Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&s'),
    new RecipeModel('Second recipe', 'This is a second Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s'),
    new RecipeModel('Third recipe', 'This is a third Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SSzJv1gFTcR1OB-jp8RBERCcHBUr0kpFRw&s'),
    ];
}
