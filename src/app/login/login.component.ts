import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

    this.authService.loginUser(credentials)
    .subscribe({
      next: (account) => {
        if(account !== null){
          this.authService.isLoggedIn = true;
          localStorage.setItem('accountId', account.account_id);
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
