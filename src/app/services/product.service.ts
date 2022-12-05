import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product("Mario Kart", 49.99, "Racen!", "Nintendo"),
        new Product("Mario Kart 8", 79.99, "Racen maar hoger!", "Nintendo"),
        new Product("Mario Party", 39.99, "Feesten!", "Nintendo"),
        new Product("Mario Party Allstars", 51.99, "Feesten again!", "Nintendo"),
        new Product("Xenoblade Chronicles", 40.00, "De toekomst!", "Monolith Soft"),
        new Product("Xenoblade Chronicles 2", 50.00, "De toekomst again!", "Monolith Soft"),
        new Product("Xenoblade Chronicles 3", 60.00, "De toekomst lost!", "Monolith Soft"),
    ];

  constructor() { }

  getProducts(){
    return this.products;
  }

}