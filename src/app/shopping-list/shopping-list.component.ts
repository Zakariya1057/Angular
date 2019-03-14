import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { 
    this.ingredients = shoppingService.ingredients;

    shoppingService.listChange.subscribe(
      () => {
        this.ingredients = shoppingService.ingredients;
      }
    )
  }


}
