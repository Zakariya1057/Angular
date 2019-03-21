import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(public Acroute:ActivatedRoute,public RecipeService: RecipeService,public Router:Router) { }

  recipeForm:FormGroup;
  recipeShowing:Recipe;

  listChanged:boolean = false;

  id:number;
  editMode:boolean;

  ngOnInit() {
    this.Acroute.params.subscribe(
      (params:Params) => {
        this.id = params['index'];
        this.id === null ? this.editMode = false: this.editMode = true;
      }
    )

    this.recipeForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      description: new FormControl(null,Validators.required),
      ingredients: new FormArray([]),
      imagePath: new FormControl(null,Validators.required)
    })

    if(this.RecipeService.recipes[this.id]){

    this.recipeShowing = this.RecipeService.recipes[this.id];

    this.recipeForm.patchValue({
      name: this.recipeShowing.name,
      description: this.recipeShowing.description,
      imagePath: this.recipeShowing.imagePath
    });

    this.recipeShowing.ingredients.forEach(element => {
        const group = new FormGroup({
        name: new FormControl(element.name,Validators.required),
        amount: new FormControl(element.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      });

      (<FormArray>this.recipeForm.get('ingredients')).push(group); 
      this.listChanged = true;
    });
  }
}

  addHobby(){
    const group = new FormGroup({
      name: new FormControl(null,Validators.required),
      amount: new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(group); 

  }

  formSubmitted(){
    const formValues = this.recipeForm.value;
    
    if (this.recipeForm.dirty || this.listChanged){
      this.RecipeService.formEditing = true;
    }
    else {
      this.RecipeService.formEditing = false;
    }
    if(this.id !== undefined){
      this.recipeShowing.name = formValues.name;
      this.recipeShowing.description = formValues.description;
      this.recipeShowing.imagePath = formValues.imagePath;
      this.recipeShowing.ingredients = formValues.ingredients; 
  
      this.Router.navigate(['../'],{relativeTo: this.Acroute});
    }
    else {
      this.recipeShowing = new Recipe(formValues.name, 
        formValues.description, 
        formValues.imagePath,
        formValues.ingredients
      );
      console.log(formValues.ingredients);
      this.RecipeService.recipes.push(this.recipeShowing);
      const length =  +this.RecipeService.recipes.length;
      this.Router.navigate(['..',length-1,'edit'],{relativeTo: this.Acroute}); 

    }

  }

  DeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.listChanged = true;
  }

  cancelChanges(){
    this.recipeForm.reset();
    this.Router.navigate(['..'],{relativeTo:this.Acroute});
  }
}
