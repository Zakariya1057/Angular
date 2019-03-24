
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { MyHttpService } from 'src/app/shared/servers.service';
import { TokenService } from 'src/app/auth/token-getter.service';

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
        if(data.statusCode   === 401){
          this.TokenService.tokenValidated = false;
        } 
        else {
          this.TokenService.tokenValidated = true;
        }
      }
    , err => console.log(err))
    ;
  }
  sendIngredients(){
    const recipes:any = this.recipeService.recipes;
    console.log(recipes);
    this.httpService.setRecipes(recipes).subscribe((response:any)=>{
      if (recipes.code !== 401){

    }
  })
  }

  getIngredients(){
    
      this.httpService.getRecipes().subscribe( (response:any)=>{
      if (response.statusCode !== 401){
      this.recipeService.recipes = response;
      this.recipeService.recipesChanged.next();
        }
        else {
          this.router.navigate(['login'])
        }

    }) 
}

LogMeOut(){
  localStorage.removeItem("access_token");
  this.TokenService.tokenValidated = false;
}


}
