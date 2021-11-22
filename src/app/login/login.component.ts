import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // loginForm = new FormGroup({
  //   userName : new FormControl(''),
  //   password: new FormControl('')
  // });
  

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['',passwordValidator]

  });



  onSubmit(){
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      if(formValue.userName=="admin" && formValue.password=="admin"){
        this.router.navigate(["/admin/home"]);
      }      
      else{
        alert("Username and password doesn't match!!!");

      }
  }

}
}
