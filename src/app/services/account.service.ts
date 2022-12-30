import { Injectable } from "@angular/core";
import { Role } from "../enums/role.enums";
import { Account } from "../models/account.model";

@Injectable({
    providedIn: 'root',
  })
export class AccountService{
    private accounts = [
        new Account("rob", "123", Role.ADMIN)
    ]

    getAccounts(){
        return this.accounts;
    }
}