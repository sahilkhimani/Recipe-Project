import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [ShoppingListService, RecipeService]
})
export class AppComponent {
  title = 'angular-project';
}
