import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product("Mario Kart", 49.99, "Racen!", "Nintendo"),
    new Product("Mario Party", 39.99, "Feesten!", "Nintendo")
];

  constructor() { }

  ngOnInit(): void {
  }

}
