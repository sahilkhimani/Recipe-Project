import { Component } from '@angular/core';
import { ShoppingEditsComponent } from './shopping-edits/shopping-edits.component';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditsComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
