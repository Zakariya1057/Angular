import { Component, Output } from '@angular/core';
import { RecipeService } from './shared/recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showing:string;

  constructor(private recipeService:RecipeService){
   this.showing =  recipeService.showing;
   console.log(this.showing);
   recipeService.toggler.subscribe(
     (showing) => {
      this.showing = showing;
     }
   )
  }

  
}
