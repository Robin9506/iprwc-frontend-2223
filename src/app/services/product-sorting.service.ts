import { Injectable } from "@angular/core";
import { SortStategy } from "../enums/sort.enum";
import { Product } from "../models/product.model";
import { Sort } from "../models/sort.model";

@Injectable({
    providedIn: 'root',
  })
export class ProductSortingService{

    sortProducts(sort: Sort, filteredProducts: Product[]){
        if(sort.sortStrategy == SortStategy.BY_LETTER){
          if(sort.ascending){
            return filteredProducts.sort((productCurrent, productNext) => productCurrent.name.localeCompare(productNext.name));
          }
            return filteredProducts.sort((productCurrent, productNext) => -1 * productCurrent.name.localeCompare(productNext.name));
        }
    
        if(sort.sortStrategy == SortStategy.BY_PRICE){
          if(sort.ascending){
            return filteredProducts.sort((productCurrent, productNext) => productCurrent.price < productNext.price ? -1 : 1);
          }
            return filteredProducts.sort((productCurrent, productNext) => productCurrent.price > productNext.price ? -1 : 1);
        }
    
        return [];
      }

}