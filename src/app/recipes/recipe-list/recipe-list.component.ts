import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes;

  constructor(private RecipeService: RecipeService) {
    this.recipes = this.RecipeService.recipes;

   }
}
