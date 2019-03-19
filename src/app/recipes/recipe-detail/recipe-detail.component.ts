import { Component, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import {Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit  {


  index: number;

  recipeDetail: Recipe;

    constructor(private recipeService:RecipeService,private shoppingService:ShoppingService,private Route:ActivatedRoute,private theRoute:Router) {} 

/*   constructor(private recipeService:RecipeService,private shoppingService:ShoppingService) { 
    this.recipeService.detailsEvent.subscribe( (recipe: Recipe) => {
      this.recipeDetail = recipe;
    })
  } */

  ngOnInit(){
    this.index = +this.Route.snapshot.params['index'];
    console.log(this.index);
    this.recipeDetail = this.recipeService.recipes[this.index];

/*     this.Route.params.subscribe(
      (params:Params) => {
        this.recipeDetail = this.recipeService.recipes[Number(params['this.index'])];
      }
    ) */

    if(!isNaN(this.index)){
    this.recipeService.detailsEvent.subscribe(
      (index:number) => {
        this.index = index;
        this.recipeDetail = this.recipeService.recipes[index];
      }
    )
  }
}

 AddToList(){
   
if (this.shoppingService.AddedItems.indexOf(this.index) === -1){
    this.shoppingService.AddedItems.push(this.index);
    this.shoppingService.addFromShopping(this.recipeDetail.ingredients);
    this.theRoute.navigate(['shopping']);
   }
   else {
     alert("Already Added To Ingredients");
   } 
   
   
  } 

  DeleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
  }
  
}
