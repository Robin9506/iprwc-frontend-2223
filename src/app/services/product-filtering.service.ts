import { Injectable } from "@angular/core";
import { Filter } from "../models/filter.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root',
  })
export class ProductFilteringService{

    getProductsByFilter(filter: string[] | number[], products: Product[]){
        let filteredProducts: Product[] = [];
        for (let index = 0; index < filter.length; index++) {
            products.filter(product => 
                product.platform === filter[index] 
                || product.company === filter[index] 
                || product.rating === filter[index])
            .map(item => 
                filteredProducts.push(new Product(
                    item.name, 
                    item.price, 
                    item.description, 
                    item.company, 
                    item.imageLink, 
                    item.rating, 
                    item.platform)));
          }

        return filteredProducts;  
    }
}