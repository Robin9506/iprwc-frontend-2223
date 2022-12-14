import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-thumbnail',
  templateUrl: './cart-thumbnail.component.html',
  styleUrls: ['./cart-thumbnail.component.scss']
})
export class CartThumbnailComponent implements OnInit {
  @Input() item: Cart;

  constructor() { }

  ngOnInit(): void {
  }

}
