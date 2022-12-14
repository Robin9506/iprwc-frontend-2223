import { Component, OnInit} from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalPrice: number = 0;
  promoDiscount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.calculateTotalPrice();
  }

  getCartItems(){
    this.cartService.getCartSubject().subscribe((cart: Cart[]) => {
      this.cartItems = cart;
    });
  }

  removeItemFromCart(id: number){
    this.cartService.removeFromCart(id);
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let currentPrice: number = 0;
    for (let index = 0; index < this.cartItems.length; index++) {
      currentPrice += this.cartItems[index].product.price;   
    }

    currentPrice *= ((100 - this.promoDiscount)/100)
    this.totalPrice = currentPrice;
  }

  giveDiscount(discount: number){
    this.promoDiscount = discount;
    this.calculateTotalPrice();
  }

}
