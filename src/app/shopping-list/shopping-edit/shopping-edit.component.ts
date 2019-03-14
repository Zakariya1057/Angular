import { Component, ViewChild} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingService:ShoppingService){}

  @ViewChild('name') name;
  @ViewChild('amount') amount;
  
  newIngredient: Ingredient;

  AddTooList(){
    this.newIngredient = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.shoppingService.addToList(this.newIngredient)
  }


}
