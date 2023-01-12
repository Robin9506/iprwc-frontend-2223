import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amountInCart: number = 0;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private cartService: CartService, public authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.amountInCart = this.cartService.getCurrentAmountInCart();
    this.cartService.getCartSubject().subscribe({
      next: (cartItems: Cart[]) => {
        this.amountInCart = cartItems.length;
      }
    })
  }

  logout(){
    this.authService.logoutUser();
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToProduct(){
    this.router.navigate(['product']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToCart(){
    this.router.navigate(['cart']);
  }

  navigateToMyAccount(){
    this.router.navigate(['customer']);
  }

  navigateToAdmin(){
    this.router.navigate(['admin']);
  }
}
