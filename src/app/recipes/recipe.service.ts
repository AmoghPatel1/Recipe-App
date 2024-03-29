import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

//* To inject a service inside a service use @Injectable.
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Apple Pie',
  //     'A super-tasty Apple Pie - just awesome!',
  //     'https://imgs.search.brave.com/_0bvn-B0hpK-hqPCLDOQdaWvhetMsPa0gRi2zLCw0hQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zYWxs/eXNiYWtpbmdhZGRp/Y3Rpb24uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA5/L2FwcGxlLXBpZS13/aXRoLWZsdXRlZC1l/ZGdlcy5qcGc',
  //     [
  //       new Ingredient('Apple', 4),
  //       new Ingredient('Sugar', 10)
  //     ]
  //   ),
  //   new Recipe(
  //     'Zucchini Cupcake',
  //     'What else you need to say?',
  //     'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps7178_TH163622C04_13_5b-4.jpg?fit=700,700',
  //     [
  //       new Ingredient('Bread', 2),
  //       new Ingredient('Chocolate', 5)
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // slice method is to duplicate the recipe array.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient []) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

