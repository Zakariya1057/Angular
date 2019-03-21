import { Component, ViewChild, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  index:number;
  EditMode:boolean = false;
  LoadedIngredient;

  constructor(private shoppingService:ShoppingService){}
  
  @ViewChild('form') form:NgForm;

  newIngredient: Ingredient;

  AddToList(){
    if(this.EditMode){
      const Formvalues = this.form.value;
      this.shoppingService.updateItem(this.index,Formvalues.name,Formvalues.amount);
      
    }
    else {
      const Formvalues = this.form.value;
      this.newIngredient = new Ingredient(Formvalues.name,Formvalues.amount);
      this.shoppingService.addToList(this.newIngredient)
      this.shoppingService.listChange.next(this.newIngredient);
    }
    this.clearInput();
  }

  clearInput(){
    this.form.reset();
    this.EditMode = false;
  }

  DeleteItem(){
    this.shoppingService.DeleteFromList(this.index);
    this.clearInput();
  }

  ngOnInit(){

    this.shoppingService.IngredientChange.subscribe( (index:number)=>{
      this.index = index;
      this.EditMode = true;
      this.LoadedIngredient = this.shoppingService.ingredients[index];

      this.form.setValue({
        name: this.LoadedIngredient.name,
        amount: this.LoadedIngredient.amount,
      })

    })

  }

}
