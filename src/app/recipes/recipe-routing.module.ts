import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { CannotGuardService } from '../auth/cannot-guard.service';
import { NgModule } from '@angular/core';

const recipeRoute:Routes = [
    {path:'', component: RecipesComponent,children: [
        {path: 'add',component: RecipeEditComponent},
        {path: ':index',component: RecipeDetailComponent},
        {path: '',component: RecipeStartComponent,pathMatch:'full'},
        {path: ':index/edit',component: RecipeEditComponent,canDeactivate: [CannotGuardService]}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class RecipeRoutingModule {
    
}