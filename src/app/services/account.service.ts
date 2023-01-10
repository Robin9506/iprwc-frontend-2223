import { Injectable } from "@angular/core";
import { Role } from "../enums/role.enums";
import { Account } from "../models/account.model";

@Injectable({
    providedIn: 'root',
  })
export class AccountService{
    private accounts = [
        new Account("rob", "123", Role.ADMIN, "jan de straat 8", "leiden", "Nederland")
    ]

    getAccounts(){
        return this.accounts;
    }

    createAccountInService(account: Account){
        const accountName: string = account.username;
        const accountPassword: string = account.password;
        const accountStreet: string = account.address;
        const accountCity: string = account.city;
        const accountCountry: string = account.country;

        const newAccount: Account = new Account(
            accountName, 
            accountPassword, 
            account.role, 
            accountStreet, 
            accountCity, 
            accountCountry);

        this.accounts.push(newAccount);

        
        
        console.log(this.accounts);
    }

}