import { Injectable } from "@angular/core";
import { Role } from "../enums/role.enums";
import { Account } from "../models/account.model";

@Injectable({
    providedIn: 'root',
  })
export class AccountService{
    private accounts = [
        new Account(1, "rob", "123", Role.ADMIN, "jan de straat 8", "leiden", "Nederland")
    ]

    getAccounts(){
        return this.accounts;
    }

    getAccountBasedOnCredentials(username: string, password: string){
        for (let account = 0; account < this.accounts.length; account++) {
            if(this.accounts[account].username === username && this.accounts[account].password === password){
                return this.accounts[account].id;
            }    
        }
        return -1;
    }

    getAccountById(id: number){
        let account: Account = new Account(0 ,"", "", Role.CUSTOMER, "", "", "");
        this.accounts.filter(account => 
          account.id === id)
                .map(item => 
                  account = new Account(
                    item.id,
                    item.username, 
                    item.password, 
                    item.role, 
                    item.address, 
                    item.city, 
                    item.country));
          
                    return account;
    }

    createAccountInService(account: Account){
        const accountName: string = account.username;
        const accountPassword: string = account.password;
        const accountStreet: string = account.address;
        const accountCity: string = account.city;
        const accountCountry: string = account.country;

        const newAccount: Account = new Account(
            this.accounts.length,
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