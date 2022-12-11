import { Injectable } from '@angular/core';
import { SortStategy } from '../enums/sort.enum';
import { Filter } from '../models/filter.model';
import { Product } from '../models/product.model';
import { Sort } from '../models/sort.model';
import { ProductFilteringService } from './product-filtering.service';
import { ProductSortingService } from './product-sorting.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product(1, "Animal Crossing", 49.99, "Dieren steken over!", "Nintendo", "../../../assets/ac.jpg", 4, "Switch"),
        new Product(2, "Mario Kart 8 Deluxe", 79.99, "Racen maar hoger!", "Nintendo", "../../../assets/marioKart8.jpg", 4, "3DS"),
        new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/xc2.jpeg", 4, "Switch"),
        new Product(4, "Mario Party Allstars", 51.99, "Feesten again!", "Nintendo", "../../../assets/mps.jpg", 4, "3DS"),
        new Product(5, "Xenoblade Chronicles", 39.99, "De toekomst!", "Monolith Soft", "../../../assets/xc1.jpg", 5, "3DS"),
        new Product(6, "Super Mario Party", 39.99, "Feesten!", "Nintendo", "../../../assets/smp.jpg", 2, "Switch"),
        new Product(7, "Xenoblade Chronicles 3", 59.99, "De toekomst lost!", "Monolith Soft", "../../../assets/xc3.jpg", 5, "Switch"),
    ];



  constructor(private productFilteringService: ProductFilteringService, 
    private productSortingService: ProductSortingService) { }

  getProducts(){
    return this.products;
  }

  getProductsByFilter(filter: Filter){
    this.productFilteringService.fillFilteredProductArray(filter, this.getProducts());
    return this.productFilteringService.returnFilteredProducts();
   
  }

  getProductsBySort(sort: Sort, filteredProducts: Product[]){
    this.productSortingService.sortProducts(sort, filteredProducts);
    return filteredProducts;
  }

}