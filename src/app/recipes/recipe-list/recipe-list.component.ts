import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://imgs.search.brave.com/gGv21Cx_AeB4yATW9TC_JJUCAknSA78R-DgPTyJnY9w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nd2VsbC5j/b20vdGhtYi9qSlFB/YmwxUm9BU1ZrX0Zt/QlpFRWZHZTVEWm89/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS93/ZWVrbmlnaHQtbGVt/b24tY2hpY2tlbi04/MDMwNzI4LTF4MS03/NzExNjY2ZTUwZmQ0/ZTA1YjU3NzRkZjcw/MGVmNGZlZi5qcGc'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://imgs.search.brave.com/tpQ6RJdcKSdk911m0YA-nvkiXpWwLrCGXheVyxryC5o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvQ2hpY2tl/bi1UaWtrYS1NYXNh/bGEtQm93bHMtMy04/NDB4MTIwMC5qcGc')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } 
}
