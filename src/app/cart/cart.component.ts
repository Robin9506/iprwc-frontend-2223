import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalPrice: number = 0;
  discountPrice: number = 0;
  promoDiscount: number = 0;

  constructor(
    private cartService: CartService, 
    private orderService: OrderService, 
    private authService: AuthService,
    private router: Router) { }

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
    this.calculateDiscount();
  }

  calculateTotalPrice(){
    let currentPrice: number = 0;
    for (let index = 0; index < this.cartItems.length; index++) {
      currentPrice += this.cartItems[index].product.price;   
    }

    this.totalPrice = currentPrice;
  }

  giveDiscount(discount: number){
    this.promoDiscount = discount;
    this.calculateDiscount();
    this.calculateTotalPrice();
  }

  calculateDiscount(){
    this.discountPrice = 0;
    let totalPrice = this.totalPrice;

    if(this.promoDiscount > 0){
        return this.discountPrice = totalPrice *= ((100 - this.promoDiscount)/100);
    }
   
    return this.discountPrice = 0;
    
  }

  checkoutItems(){
    if(this.authService.isLoggedIn === false){
      return;
    }
    const orderLength = this.orderService.getOrders().length + 1;
    const products: Product[] = [];

    for (let product = 0; product < this.cartItems.length; product++) {
       products.push(this.cartItems[product].product);
      
    }
    
    let price = this.totalPrice;

    if (this.promoDiscount > 0) {
      price = this.discountPrice;
    }

    const accountId = localStorage.getItem('accountId');

    const order = new Order(orderLength, +accountId!, products, price, Date.now());
    this.orderService.placeOrder(order);

    this.router.navigate(["checkout"]);

    // this.cartService.clearCart();
    // this.getCartItems();
  }

}
