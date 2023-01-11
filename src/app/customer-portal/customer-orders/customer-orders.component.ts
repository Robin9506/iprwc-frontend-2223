import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
  orders: Order[]= [];
  id = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('accountId');
    this.id =+ id!;
    this.orders = this.orderService.getAllOrdersByAccountId(this.id);
  }

}
