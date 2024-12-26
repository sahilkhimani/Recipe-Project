import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [ShoppingListService]
})
export class AppComponent {
  // public recipeMenu = 'recipe';
  // public shoppingListMenu = 'shopping-list';
  title = 'angular-project';
  // selectedMenu = 'recipe';
  // menuSelected(menuItem: string) {
  //   this.selectedMenu = menuItem;
  // }
}
