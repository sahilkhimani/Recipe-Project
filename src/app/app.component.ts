import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
     HeaderComponent, 
     RecipesComponent, 
     ShoppingListComponent,
     CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public recipeMenu = 'recipe';
  public shoppingListMenu = 'shopping-list';
  title = 'angular-project';
  selectedMenu = 'recipe';
  menuSelected(menuItem: string) {
    this.selectedMenu = menuItem;
  }
}
