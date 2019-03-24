import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditableDirective } from './shared/editable.directive';

import { DirectiveModule } from './shared/directive.module';
import { HeaderComponent } from './core/header/header.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EditableDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AuthModule,
    DirectiveModule,
    ShoppingModule,
    CoreModule,

    //Needs to be last one or else error code runs
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
