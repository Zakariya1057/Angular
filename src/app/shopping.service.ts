import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { RecipeService } from 'src/app/recipe.service';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {

  constructor(private RecipeService: RecipeService) { }
  listChange = new EventEmitter();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addToList(event: any){
    this.ingredients.push(
      new Ingredient(event.name,event.amount)
    ); 
    this.listChange.emit();
  }

  DeleteFromList(index: number){
    this.ingredients.splice(index,1);
    this.listChange.emit();
  }

  addFromShopping(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.RecipeService.toggleView('Shopping');
  }


}
