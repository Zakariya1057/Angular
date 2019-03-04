import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
recipes: boolean = true;
shopping_list:boolean = false;

  showRecipes() {
    this.recipes = true;
    this.shopping_list = false;
  }

  showList() {
    this.recipes = false;
    this.shopping_list = true;
  }

}
