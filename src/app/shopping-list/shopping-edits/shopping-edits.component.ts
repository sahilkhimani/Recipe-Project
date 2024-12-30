import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-edits',
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-edits.component.html',
  styleUrl: './shopping-edits.component.css'
})
export class ShoppingEditsComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  editMode = false;
  editIndex?: number;
  editedItem? : IngredientModel;
  @ViewChild('f') formVal? : NgForm;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editingId.subscribe(
      (index: number) => {
        this.editIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(index);
        this.formVal?.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        })
      }
    )
  }

  onAddItem(formData: NgForm) {
    const ingName = formData.value['name'];
    const ingAmount = formData.value['amount'];
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editIndex!, new IngredientModel(ingName, ingAmount));
    }
    else{
      this.shoppingListService.onIngredientAdd(new IngredientModel(ingName, ingAmount));
    }
    this.editMode = false;
   formData.reset();
  }

  clearFields(){
    this.editMode = false;
    this.formVal?.reset();
  }

  deleteItem(){
    this.shoppingListService.deleteIngredient(this.editIndex!);
    this.clearFields();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
