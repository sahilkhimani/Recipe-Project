import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DefaultRecipeComponent } from './default-recipe/default-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {path: '', redirectTo : 'recipes', pathMatch : 'full'},
    {path: 'recipes', component : RecipesComponent, children : [
        {path: '', component : DefaultRecipeComponent},
        {path : ':id', component : RecipeDetailComponent}
    ]},
    {path: 'shoppingList', component : ShoppingListComponent}
];
