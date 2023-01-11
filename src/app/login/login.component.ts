import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.authService.loginUser(this.username, this.password);

    if(this.authService.isLoggedIn){
      this.router.navigate(["home"]);
    }
  }

  navigateToSignUp(){
    this.router.navigate(["signup"]);
  }

}
