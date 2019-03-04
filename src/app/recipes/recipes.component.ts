import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  index: Ingredient;

  recipeDetail;
  infoText;
  getRecipe(event: any){
    console.log(event);
    this.index = event;
    this.index.amount;
  }
  recipeShow;
  constructor() { }

  ngOnInit() {
  }

}
