import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem;
  constructor() { }

  @Output() SendRecipe = new EventEmitter<number>();
  @Input() index:number;
  setRecipe(index){
    this.SendRecipe.emit(index);
  }
  ngOnInit() {
  }

}
