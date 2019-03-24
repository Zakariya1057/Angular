import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit,OnDestroy {

  @Input() recipeItem;

  recipes;

  Subscription: Subscription;
  constructor(private recipeService:RecipeService,public route:Router,public Acroute:ActivatedRoute) {  
  }

  
  @Output() SendRecipe = new EventEmitter<number>();
  @Input() index:number;
  
  ngOnInit() {
    this.recipes = this.recipeService.recipes;

    this.Subscription = this.recipeService.recipesChanged.subscribe( ()=>{
      this.recipes = this.recipeService.recipes;
    })

  }

  EmitEvent(index:number){
    this.recipeService.detailsEvent.next(index);
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}
