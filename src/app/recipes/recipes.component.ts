import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(public route:Router,public Acroute:ActivatedRoute) { }

  ngOnInit() {
    
  }

  createRecipe(){
    this.route.navigate(['add'],{relativeTo:this.Acroute});
  }
}
