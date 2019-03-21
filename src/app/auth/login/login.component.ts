import { RecipeService } from 'src/app/shared/recipe.service';
import { MyHttpService } from '../../shared/servers.service';
import { TokenService } from './../token-getter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logIn:FormGroup;

  constructor(public TokenService:TokenService,public router:Router,private httpService:MyHttpService,public recipeService:RecipeService) { }

  ngOnInit() {
    this.logIn = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
    })
  }

  onSubmit(){

    this.TokenService.LoginToken(this.logIn.value);

    this.router.navigate(['../']);

  }
}
