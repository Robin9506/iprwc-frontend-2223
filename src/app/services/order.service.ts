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

    getAllOrdersByAccountId(accountId: number){
        let privateOrders: Order[] = [];
        privateOrders = this.orders.filter(order => order.accountId === accountId);

        return privateOrders;

    }

    placeOrder(order: Order){
        this.orders.push(order);
    }
}