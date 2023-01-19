import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role.enums';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private username: string;
  private password: string;
  

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(signUpForm: NgForm){
    const accountName: string = signUpForm.value.username;
    const accountPassword: string = signUpForm.value.password;
    const accountRole: Role = Role.USER;
    const accountStreet: string = signUpForm.value.address;
    const accountCity: string = signUpForm.value.city;
    const accountCountry: string = signUpForm.value.country;

    const newAccount = new Account(
      "",
      accountName,
      accountPassword,
      accountRole,
      accountStreet,
      accountCity,
      accountCountry
    );

    this.accountService.createAccountInService(newAccount);
    this.router.navigate(["login"]);
  }

}
