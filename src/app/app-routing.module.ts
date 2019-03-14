import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const AppRoutes: Routes = [
    {path: '',redirectTo: '/recipes',pathMatch:'full'},
    {path:'recipes', component: RecipesComponent,children: [
        {path: 'add',component: RecipeEditComponent},
        {path: ':index',component: RecipeDetailComponent},
        {path: '',component: RecipeStartComponent,pathMatch:'full'},
        {path: ':index/edit',component: RecipeEditComponent}
    ]},
    {path:'shopping',component: ShoppingListComponent},
    {path:'404',component:ErrorPageComponent},
    {path:'**',redirectTo: '/404'}
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}