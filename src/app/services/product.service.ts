import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product("Animal Crossing", 49.99, "dieren steken over!", "Nintendo", "../../../assets/ac.jpg", 4),
        new Product("Mario Kart 8 Deluxe", 79.99, "Racen maar hoger!", "Nintendo", "../../../assets/marioKart8.jpg", 4),
        new Product("Super Mario Party", 39.99, "Feesten!", "Nintendo", "../../../assets/smp.jpg", 2),
        new Product("Mario Party Allstars", 51.99, "Feesten again!", "Nintendo", "../../../assets/mps.jpg", 4),
        new Product("Xenoblade Chronicles", 39.99, "De toekomst!", "Monolith Soft", "../../../assets/xc1.jpg", 5),
        new Product("Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/xc2.jpeg", 5),
        new Product("Xenoblade Chronicles 3", 59.99, "De toekomst lost!", "Monolith Soft", "../../../assets/xc3.jpg", 5),
    ];

  constructor() { }

  getProducts(){
    return this.products;
  }

  getFilteredProductsByCompany(company: string){
    return this.products.filter(product => product.company === company);
  }

}