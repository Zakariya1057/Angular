import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { ErrorPageComponent } from './error-page/error-page.component';
import { DirectiveModule } from '../shared/directive.module';

@NgModule({
    declarations:[
        HeaderComponent, ErrorPageComponent, HomeComponent
    ],
    imports: [
        CommonModule,
        DirectiveModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ]
})

export class CoreModule {

}