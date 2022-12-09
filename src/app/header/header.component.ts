import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amountInCart: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartSubject().subscribe({
      next: (cartItems: Cart[]) => {
        this.amountInCart = cartItems.length;
      }
    })
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
