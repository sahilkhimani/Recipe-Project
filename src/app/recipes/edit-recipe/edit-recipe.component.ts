import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { IngredientModel } from '../../shared/ingredients.model';
import { CommonModule } from '@angular/common';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit {

  id?: number;
  editMode = false;
  recipeForm!: FormGroup;
  constructor(private route: ActivatedRoute,
    private reipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  get ingredients() {
    return <FormArray>this.recipeForm.get('ingredients');
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  saveRecipe() {
    const newRecipe = new RecipeModel(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imageUrl,
      this.recipeForm.value.ingredients
    )
    if (this.editMode) {
      this.reipeService.updateRecipe(this.id!, newRecipe);
    }
    else {
      this.reipeService.addRecipe(newRecipe);
    }
    this.recipeForm.reset();

  }
  cancelRecipe() {
    this.router.navigate(['../'], {relativeTo : this.route})
  }

  removeIng(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients: FormArray<FormGroup> = new FormArray<FormGroup>([]);


    if (this.editMode) {
      const recipes = this.reipeService.getRecipeById(this.id);
      recipeName = recipes.recipeName;
      recipeImage = recipes.recipeImageUrl;
      recipeDescription = recipes.recipeDescription;
      if (recipes.recipeIng) {
        for (let item of recipes.recipeIng) {
          const ing = new FormGroup({
            'name': new FormControl(item.name, Validators.required),
            'amount': new FormControl(item.amount, [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
          recipeIngredients.push(ing);
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(recipeImage, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    this.cancelRecipe()
  }
}
