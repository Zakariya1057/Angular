import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(public http: HttpClient,public router:Router) {}

  tokenValidated:boolean = false;

  CreateToken(UserData) {
    this.http
      .post('http://localhost:8080/signup',UserData)
      .subscribe(
        (data:any) =>{
          if (data.statusCode   !== 401){
            localStorage.setItem('access_token',data.token); 
          }
          else {
            localStorage.removeItem("access_token");
            this.tokenValidated = true;
          }
        }, 
        (err) => {
          console.log(err);
        }
      )
    }

    LoginToken(data) {
      this.http
        .post('http://localhost:8080/login',data)
        .subscribe(
          (data:any) =>{

             if (data.statusCode !== 401){
               localStorage.setItem('access_token',data.token); 
               this.tokenValidated = true;
               this.router.navigate(['recipes']);
            }
            else {
              localStorage.removeItem("access_token");
            } 
          }, 
          (err) => {
            console.log(err);
          }
        )
      }

      validateToken(){
        return this.http.post('http://localhost:8080/validateToken',{});
      }

      ValidateGuard(){
        
/*         return this.http.post('http://localhost:8080/validateToken',{}).pipe(
          map( (data:any) =>{
            if (data.statusCode   !== 401){
              return false;
            }
            else {
              return true;
            }
          })
        ); */

      }
      authenticateUser(){
        return this.http.post('http://localhost:8080/validateToken',{}).pipe(
          map( (data:any) =>{
            console.log(data);
            if (data.statusCode === 401){
              this.router.navigate(['login']);
            }
            else {
              return true;
            }
          })
        )
      }

      promiseAuthenticate(){

        let promise = new Promise((resolve, reject) => {

          this.http.post('http://localhost:8080/validateToken',{})
            .toPromise()
            .then(
              (res:any) => { // Success
                if (res.statusCode === 200){
                  resolve(true);
                }
                else {
                  resolve(false);
                }
                
              }
            );
        });

        return promise;
      }
  }
