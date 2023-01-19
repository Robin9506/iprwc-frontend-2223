import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string = "";
  private password: string = "";


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  loginInService(ngForm: NgForm){
    this.username = ngForm.value.username;
    this.password = ngForm.value.password;

    const credentials: Credentials = new Credentials(this.username, this.password)

    this.authService.loginUser(credentials).pipe(delay(750))
    .subscribe({
      next: (token) => {
        console.log(token)
        if(token !== null){
          this.authService.isLoggedIn = true;
          localStorage.setItem('token', token.tokenValue);
        }
      },
      complete: () =>{
        if(this.authService.isLoggedIn){
          this.router.navigate(["home"]);
        }
      }
    }
);;

    
  }

  navigateToSignUp(){
    this.router.navigate(["signup"]);
  }

}
