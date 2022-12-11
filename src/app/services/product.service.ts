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
        new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/xc2.jpeg", 5, "Switch"),
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
    let listOfFilteredProducts: Product[]= [];

    let filteredPlatformProducts: Product[] =[];
    let filteredCompanyProducts: Product[] =[];
    let filteredRatingProducts: Product[] =[];

    for (let index = 0; index < filter.platforms.length; index++) {
      filteredPlatformProducts = this.productFilteringService.filterProducts(filter.platforms, this.products);
    }

    for (let index = 0; index < filter.companies.length; index++) {
      filteredCompanyProducts = this.productFilteringService.filterProducts(filter.companies, this.products);
    }

    for (let index = 0; index < filter.ratings.length; index++) {
      filteredRatingProducts = this.productFilteringService.filterProducts(filter.ratings, this.products);
    }

    if(filter.platforms.length !== 0 && filter.companies.length !== 0 && filter.ratings.length !== 0){
      let firstIntersection = this.productFilteringService.compareFilteredProductsArray(filteredPlatformProducts, filteredCompanyProducts);
      return listOfFilteredProducts = this.productFilteringService.compareFilteredProductsArray(firstIntersection, filteredRatingProducts);
    }
    
    
    if(filter.platforms.length !== 0 && filter.companies.length !== 0){
      return listOfFilteredProducts = this.productFilteringService.compareFilteredProductsArray(filteredPlatformProducts, filteredCompanyProducts);
      
    }
    
    
    if(filter.platforms.length !== 0 && filter.ratings.length !== 0){
      return listOfFilteredProducts = this.productFilteringService.compareFilteredProductsArray(filteredPlatformProducts, filteredRatingProducts);
      
    }
    
    if(filter.companies.length !== 0 && filter.ratings.length !== 0){
      return listOfFilteredProducts = this.productFilteringService.compareFilteredProductsArray(filteredCompanyProducts, filteredRatingProducts);
      
    }
    
    if(filter.platforms.length !== 0){
      return filteredPlatformProducts;
    }
    
    if(filter.companies.length !== 0){
      console.log("here");
      return filteredCompanyProducts;
    }
    
    if(filter.ratings.length !== 0){
      return filteredRatingProducts;
    }
    
    if(!listOfFilteredProducts.length){
      return this.getProducts();
    }

    return this.getProducts();
  }

  getProductsBySort(sort: Sort, filteredProducts: Product[]){
    this.productSortingService.sortProducts(sort, filteredProducts);
    return filteredProducts;
  }

}