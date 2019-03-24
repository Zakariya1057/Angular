import { RecipeRoutingModule } from './recipe-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../shared/directive.module';

@NgModule({
declarations: [
  RecipesComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeStartComponent,
  RecipeEditComponent,
],
imports: [
  CommonModule,
  RecipeRoutingModule,
  ReactiveFormsModule,
  DirectiveModule
]
})

export class RecipeModule {

}
