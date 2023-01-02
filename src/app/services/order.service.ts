import { Injectable } from "@angular/core";
import { Order } from "../models/order.model";

@Injectable({
    providedIn: 'root',
  })
export class OrderService{
    private orders: Order[] = [];

    getOrders(){
        return this.orders;
    }

    placeOrder(order: Order){
        this.orders.push(order);
    }
}