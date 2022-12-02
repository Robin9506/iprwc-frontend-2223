import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartItems: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCartItems(){
    this.cartItems = this.cartService.getCart();
  }

}
