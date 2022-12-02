import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product("Mario Kart", 49.99, "Racen!", "Nintendo"),
        new Product("Mario Party", 39.99, "Feesten!", "Nintendo")
    ];

  constructor() { }

  getProducts(){
    return this.products;
  }

}