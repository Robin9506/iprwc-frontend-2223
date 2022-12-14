import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/role.enums';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  account: Account
  role: Role;
  id: string = "";

  isLoading: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getProfile();    
    
  }

  getProfile(){
    this.id = localStorage.getItem('accountId')!;
    this.accountService.getAccountsFromServerById(this.id).subscribe({
      next: (account: Account) => {
        this.account = account;
        this.role = account.role;
      },
      error: () => {
        console.log("sup");
      },
      complete: () => {
      }
    });
  }
}
