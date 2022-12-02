import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToProduct(){
    this.router.navigate(['product']);
  }

  navigateToAboutUs(){
    this.router.navigate(['product']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToCart(){
    this.router.navigate(['cart']);
  }
}
