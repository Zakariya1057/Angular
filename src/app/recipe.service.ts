import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Burger', 
    'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, ', 
    'https://static.olocdn.net/menu/applebees/ffac757fc64d1e414422bf204f1a4f87.jpg',
   [new Ingredient('Burger',10), new Ingredient('Pizza',69)]
    ), 
    new Recipe('Chicken', 
    'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, ', 
    'https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE12/28COOKING-FRIEDCHICKENGUIDE12-videoLarge.jpg'
    ,[new Ingredient('Fries',20)]
    )
  ];

  detailsEvent = new EventEmitter<Recipe>();
  
  toggler = new EventEmitter<string>();
  
  showing:string = 'Recipes';

  showDetails(index:number){
    console.log(index);
    this.detailsEvent.emit(this.recipes[index])
  }


  toggleView(show:string){
    this.toggler.emit(show)
  }

}
