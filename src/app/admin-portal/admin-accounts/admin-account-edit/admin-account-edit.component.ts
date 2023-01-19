import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/enums/role.enums';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-admin-account-edit',
  templateUrl: './admin-account-edit.component.html',
  styleUrls: ['./admin-account-edit.component.scss']
})
export class AdminAccountEditComponent implements OnInit {
  account: Account;
  id: string = "";

  username: string = '';
  password: string = '';
  role: Role = Role.USER;
  address: string = '';
  city: string = '';
  country: string = '';

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSingleAccount();
  }

  getSingleAccount(){
    this.accountService.getAccountFromServerById(this.id).subscribe({
      next: (account: Account) => {
        this.account = account;
      },
      complete: () => {
        this.setAccountVariables();
      }     
    });
  }

  setAccountVariables(){
    this.username = this.account.username;
    this.password = this.account.password;
    this.role = this.account.role;
    this.address = this.account.address;
    this.city = this.account.city;
    this.country = this.account.country;

  }

  editAccount(id: string){
    const updatedAccount: Account = new Account(
      this.id,
      this.username,
      this.password,
      this.role,
      this.address,
      this.city,
      this.country
    );
    this.accountService.editAccount(updatedAccount, id).subscribe()
  }

}
