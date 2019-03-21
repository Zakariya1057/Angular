import { CannotGuardService } from './auth/cannot-guard.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }

const AppRoutes: Routes = [
    {path: '',redirectTo: '/recipes',pathMatch:'full'},
    {path:'recipes', component: RecipesComponent,children: [
        {path: 'add',component: RecipeEditComponent,canActivate: [AuthGuardService]},
        {path: ':index',component: RecipeDetailComponent},
        {path: '',component: RecipeStartComponent,pathMatch:'full'},
        {path: ':index/edit',component: RecipeEditComponent,canActivate: [AuthGuardService],canDeactivate: [CannotGuardService]}
    ]},
    {path:'shopping',component: ShoppingListComponent},
    {path:'404',component:ErrorPageComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'**',redirectTo: '/404'}
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes),
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:8080', 'foo.com', 'bar.com'],
            blacklistedRoutes: ['example.com/examplebadroute/']
          }
        })],
    exports: [RouterModule,JwtModule]
})

export class AppRoutingModule {

}