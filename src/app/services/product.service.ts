import { Injectable } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product("Animal Crossing", 49.99, "Dieren steken over!", "Nintendo", "../../../assets/ac.jpg", 4, "Switch"),
        new Product("Mario Kart 8 Deluxe", 79.99, "Racen maar hoger!", "Nintendo", "../../../assets/marioKart8.jpg", 4, "Switch"),
        new Product("Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/xc2.jpeg", 5, "Switch"),
        new Product("Mario Party Allstars", 51.99, "Feesten again!", "Nintendo", "../../../assets/mps.jpg", 4, "Switch"),
        new Product("Xenoblade Chronicles", 39.99, "De toekomst!", "Monolith Soft", "../../../assets/xc1.jpg", 5, "Switch"),
        new Product("Super Mario Party", 39.99, "Feesten!", "Nintendo", "../../../assets/smp.jpg", 2, "Switch"),
        new Product("Xenoblade Chronicles 3", 59.99, "De toekomst lost!", "Monolith Soft", "../../../assets/xc3.jpg", 5, "Switch"),
    ];

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProductsByFilter(filter: Filter){
    console.log(filter.company);
    if(filter.company !==""){
      return this.products.filter(product => product.company === filter.company);
    }

    return this.getProducts();
  }

}