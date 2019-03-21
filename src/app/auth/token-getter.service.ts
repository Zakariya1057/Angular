import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(public http: HttpClient) {}

  tokenValidated:boolean = false;

  CreateToken(UserData) {
    this.http
      .post('http://localhost:8080/signUp',UserData)
      .subscribe(
        (data:any) =>{
          if (data.code !== 401){
            localStorage.setItem('access_token',data.token); 
          }
          else {
            localStorage.removeItem("access_token");
            this.tokenValidated = true;
            console.error('Authentication Failed');
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

             if (data.code !== 401){
               console.log('Successfully Logged In');
               localStorage.setItem('access_token',data.token); 
               this.tokenValidated = true;
            }
            else {
              localStorage.removeItem("access_token");
              console.error('Authentication Failed');
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
            if (data.code !== 401){
              return false;
            }
            else {
              return true;
            }
          })
        ); */

      }
  }
