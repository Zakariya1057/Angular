import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  constructor(private recipeService:RecipeService){

  }

  ToggleView(show:string){
    console.log(show);
    this.recipeService.toggleView(show); 
  }
}
