import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-admin-accounts',
  templateUrl: './admin-accounts.component.html',
  styleUrls: ['./admin-accounts.component.scss']
})
export class AdminAccountsComponent implements OnInit {
  accountList: Account[] = [];

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getAccountsFromServer();
  }

  getAccountsFromServer(){
    this.accountService.getAccountsFromServer().subscribe({
      next: (accounts: Account[]) =>{
        this.accountList = accounts;
      }
    })
  }

  navigateToEditAccount(id: string){
    this.router.navigate(['account-edit/' + id]);
  }

  deleteAccount(id: string){
    this.accountService.deleteAccount(id).subscribe({
      complete: () => {
        this.getAccountsFromServer();
      }
    });
  }

}
