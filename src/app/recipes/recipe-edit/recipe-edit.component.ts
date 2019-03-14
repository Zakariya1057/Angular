import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public Acroute:ActivatedRoute) { }
  
  id:number;
  editMode:boolean;

  ngOnInit() {
    this.Acroute.params.subscribe(
      (params:Params) => {
        this.id = params['index'];
        this.id === null ? this.editMode = false: this.editMode = true;
      }
    )
  }

}
