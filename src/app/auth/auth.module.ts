import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})

export class AuthModule {
    
}