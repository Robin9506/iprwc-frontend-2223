import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
  })
export class CartService{
    private cart: Cart[] = [];
    private cart$: Subject<Cart[]> = new BehaviorSubject<Cart[]>([]);

    getCart(){
        return this.cart;
    }

    addToCart(product: Product, amount: number){
        const cartItem: Cart = new Cart(product, amount);
        this.cart.push(cartItem);
        this.cart$.next(this.cart.slice());
        localStorage.setItem('cartItems', JSON.stringify(this.cart));
    }

    removeFromCart(id: number){
        this.cart.splice(id, 1);
        this.cart$.next(this.cart.slice());
    }

    getCartSubject(){
        return this.cart$;
    }
        

}