import { Component, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import {Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit  {


  recipeDetail: Recipe;

    constructor(private recipeService:RecipeService,private shoppingService:ShoppingService,private Route:ActivatedRoute) {} 

/*   constructor(private recipeService:RecipeService,private shoppingService:ShoppingService) { 
    this.recipeService.detailsEvent.subscribe( (recipe: Recipe) => {
      this.recipeDetail = recipe;
    })
  } */

  ngOnInit(){
    const index = +this.Route.snapshot.params['index'];
    console.log(index);
    this.recipeDetail = this.recipeService.recipes[index];

    this.Route.params.subscribe(
      (params:Params) => {
        this.recipeDetail = this.recipeService.recipes[Number(params['index'])];
      }
    )
  }

/*   AddToList(){
    this.shoppingService.addFromShopping(this.recipeDetail.ingredients)
  } */
  
}
