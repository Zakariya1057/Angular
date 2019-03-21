import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService implements OnInit {

  constructor(private RecipeService: RecipeService) { }
  listChange = new Subject();
  
  AddedItems = [];
  
  IngredientChange = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addToList(event: any){
    this.ingredients.push(
      new Ingredient(event.name,event.amount)
    ); 
  }

  DeleteFromList(index: number){
    this.ingredients.splice(index,1);
  }

  addFromShopping(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.RecipeService.toggleView('Shopping');
  }

  updateItem(index:number,name:string,amount:number){
    const ingredient = this.ingredients[index];
    ingredient.amount = amount;
    ingredient.name = name;
  }

  ngOnInit(){
    this.listChange.subscribe(
      () => {
        console.log('Working');
      }
    )
  }
}
