
import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './core/home/home.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }

const AppRoutes: Routes = [
    {path: '',component:HomeComponent},
    {path:'shopping',component: ShoppingListComponent},
    {path:'404',component:ErrorPageComponent},
    {path:'recipes',loadChildren: './recipes/recipe.module#RecipeModule'},
    {path:'**',redirectTo: '/404'}
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes,{preloadingStrategy: PreloadAllModules}),
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