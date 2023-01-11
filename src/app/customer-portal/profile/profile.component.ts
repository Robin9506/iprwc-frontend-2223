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
  id: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('accountId');
    this.id =+ id!;
    this.account = this.accountService.getAccountById(this.id)!;
  }

}
