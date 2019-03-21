import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(public http:HttpClient){}

  setRecipes(recipes:Recipe[]){

    return this.http.post("http://localhost:8080/ingredients",{'ingredients':recipes}).pipe(
      map(
        (Response:Response)=>{
        return Response;
    })
    )
  }
  
  getRecipes(){
    return this.http.get("http://localhost:8080/ingredients").pipe(
      map(
        (Response: Array<any>)=>{
          console.log(Response);
          const response = Response;
           for (let ingredient of response){
            if (!ingredient['ingredients']){
              ingredient['ingredients'] = [];
            }
            console.log(ingredient);
          } 

        return Response;
    })
    )
  }
}
