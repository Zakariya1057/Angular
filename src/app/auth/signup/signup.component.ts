import { TokenService } from './../token-getter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp:FormGroup;

  loading:boolean;

  constructor(public tokenService:TokenService) { }

  ngOnInit() {
    this.signUp = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      image: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required)
    });
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('username', this.signUp.get('username').value);
    input.append('password', this.signUp.get('password').value);
    input.append('email', this.signUp.get('email').value);
    input.append('image', this.signUp.get('image').value);
    return input;
  }

  onSubmit(){
/*     return this.tokenService.CreateToken(this.signUp.value); */
      const formModel = this.prepareSave();
/*       this.loading = true;
      // In a real-world app you'd have a http request / service call here like
      // this.http.post('apiUrl', formModel)
      setTimeout(() => {
        // FormData cannot be inspected (see "Key difference"), hence no need to log it here
        alert('done!');
        this.loading = false;
      }, 1000); */
      return this.tokenService.CreateToken(formModel);
  }

  fileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.signUp.get('image').setValue(file);
    }
  }

}
