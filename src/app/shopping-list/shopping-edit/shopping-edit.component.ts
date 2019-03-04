import { Component, ViewChild, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addToShoppingList = new EventEmitter<Ingredient>();
  @Output() deleteFromShoppingList = new EventEmitter();

  @ViewChild('name') name;
  @ViewChild('amount') amount;
  
  newIngredient: Ingredient;

  AddTooList(){
    console.log(this.name.nativeElement.value,this.amount.nativeElement.value);
   /*  console.log(name.value);
    console.log(amount.value); */
    this.newIngredient = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.addToShoppingList.emit(this.newIngredient);
  }
  deleteFromList(){
    this.deleteFromShoppingList.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
