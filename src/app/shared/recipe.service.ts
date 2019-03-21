import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipes: Recipe[] = [
  ];

  recipesChanged = new Subject();
  detailsEvent = new Subject();
  
  formEditing:boolean;
  
  toggler = new EventEmitter<string>();
  
  showing:string = 'Recipes';

  showDetails(index:number){
    console.log(index);
   /*  this.detailsEvent.emit(this.recipes[index]) */
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
  }


  toggleView(show:string){
    this.toggler.emit(show)
  }

}
