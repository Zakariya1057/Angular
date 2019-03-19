import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem;

  recipes;

  constructor(private recipeService:RecipeService,public route:Router,public Acroute:ActivatedRoute) { 
    this.recipes = this.recipeService.recipes;
  }

  @Output() SendRecipe = new EventEmitter<number>();
  @Input() index:number;
  
  ngOnInit() {
  }

  EmitEvent(index:number){
    this.recipeService.detailsEvent.next(index);
  }
}
