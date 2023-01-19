import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Role } from "../enums/role.enums";
import { Account } from "../models/account.model";
import { HttpService } from "./http.service";
import { Credentials } from "../models/credentials.model";


@Injectable({
    providedIn: 'root',
  })
export class AccountService{
    private accounts = [
        new Account("", "rob", "123", Role.ADMIN, "jan de straat 8", "leiden", "Nederland")
    ]
    private account: Account;

    constructor(private httpService: HttpService){}
    

    getAccounts(){
        return this.accounts;
    }

    getAccountFromServerById(id: string){
        return this.httpService.makeGetRequest('/account/' + id)
    }

    getAccountsFromServer(){
        return this.httpService.makeGetRequest('/account');
    }

    deleteAccount(id: string){
        return this.httpService.makeDeleteRequest('/account/' + id);
    }

    editAccount(account: Account, id: string){
        return this.httpService.makePutRequest("/account/" + id , account);
      }

    getAccountBasedOnCredentials(username: string, password: string){
        for (let account = 0; account < this.accounts.length; account++) {
            if(this.accounts[account].username === username && this.accounts[account].password === password){
                return this.accounts[account].id;
            }    
        }
        return -1;
    }

    createAccountInService(account: Account){
        const accountName: string = account.username;
        const accountPassword: string = account.password;
        const accountStreet: string = account.address;
        const accountCity: string = account.city;
        const accountCountry: string = account.country;

        const newAccount: Account = new Account(
            "",
            accountName, 
            accountPassword, 
            account.role, 
            accountStreet, 
            accountCity, 
            accountCountry);

        this.httpService.makePostRequest('/account', newAccount).subscribe();

        
        
        console.log(newAccount);
    }

}