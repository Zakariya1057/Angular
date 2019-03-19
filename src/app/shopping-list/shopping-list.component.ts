import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[];
  subscription; Subscription;
  
  ngOnInit(){
    this.ingredients = this.shoppingService.ingredients;

    this.subscription = this.shoppingService.listChange.subscribe(
      () => {
        this.ingredients = this.shoppingService.ingredients;
      }
    )
  }

  constructor(private shoppingService: ShoppingService) { 
  }

  EditIngredient(index:number){
    this.shoppingService.IngredientChange.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
