import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  imports: [DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  recipeMenu = 'recipe';
  shoppingListMenu = 'shopping-list';
  @Output() selectedMenu = new EventEmitter<string>();
  menuSelected(menuItem : string) {
    this.selectedMenu.emit(menuItem);
  }
}
