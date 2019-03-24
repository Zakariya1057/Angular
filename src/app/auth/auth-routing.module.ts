import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const AppRoutes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {
    
}