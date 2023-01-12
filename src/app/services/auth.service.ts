import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials.model";
import { AccountService } from "./account.service";
import { HttpService } from "./http.service";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    isLoggedIn: boolean = false;

    constructor(private accountService: AccountService, private httpService: HttpService){}

    loginUser(credentials: Credentials){
      return this.httpService.makePostRequest('/auth', credentials)
    }

    logoutUser(){
      this.isLoggedIn = false;
      localStorage.removeItem('accountId');
    }
}