import { TokenService } from './../auth/token-getter.service';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { MyHttpService } from '../shared/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  tokenValid:any;

  constructor(private recipeService:RecipeService,private httpService:MyHttpService,public TokenService: TokenService,public router:Router){

  }

  ngOnInit(){
     this.TokenService.validateToken().subscribe(
      (data:any) => { 
        if(data.code === 401){
          this.TokenService.tokenValidated = false;
        } 
        else {
          this.TokenService.tokenValidated = true;
        }
        console.log(data);
      }
    , err => console.log(err))
    ;
  }
  sendIngredients(){
    const recipes = this.recipeService.recipes;
    this.httpService.setRecipes(recipes).subscribe((response:any)=>{
      if (response.code !== 401){
      console.log(response);
    }
  })
  }
  getIngredients(){
    
      this.httpService.getRecipes().subscribe( (response:any)=>{
      if (response.code !== 401){
      this.recipeService.recipes = response;
      console.log(this.recipeService.recipes);
      this.recipeService.recipesChanged.next();
        }

    }) 

    this.router.navigate(['recipes']);
}
LogMeOut(){
  localStorage.removeItem("access_token");
  this.TokenService.tokenValidated = false;
}

}
