import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
  })
export class CartService{
    private cart: Cart[] = [];

    getCart(){
        return this.cart;
    }

    addToCart(product: Product, amount: number){
        const cartItem: Cart = new Cart(product, amount);
        this.cart.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(this.cart));
    }

    removeFromCart(id: number){
        this.cart.splice(id, 1);
    }
        

}