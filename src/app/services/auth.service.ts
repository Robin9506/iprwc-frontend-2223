import { Injectable } from "@angular/core";
import { AccountService } from "./account.service";

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    isLoggedIn: boolean = false;

    constructor(private accountService: AccountService){}

    loginUser(username: string, password: string){
      const id = this.accountService.getAccountBasedOnCredentials(username, password);

      if(id > -1){
        this.isLoggedIn = true;
        localStorage.setItem('accountId', id.toString());
      }
      else{
        return;
      } 
    }

    logoutUser(){
      this.isLoggedIn = false;
      localStorage.removeItem('accountId');
    }
}