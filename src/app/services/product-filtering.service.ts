import { Injectable } from "@angular/core";
import { Filter } from "../models/filter.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root',
  })
export class ProductFilteringService{
    private listOfProducts: Product[]= [];
    private listOfFilteredProducts: Product[]= [];

    private filteredPlatformProducts: Product[] =[];
    private filteredCompanyProducts: Product[] =[];
    private filteredRatingProducts: Product[] =[];

    private filter: Filter = new Filter([], [] ,[]);

    filterProducts(filter: string[] | number[], products: Product[]){
        let filteredProducts: Product[] = [];
        for (let index = 0; index < filter.length; index++) {
            products.filter(product => 
                product.platform === filter[index] 
                || product.company === filter[index] 
                || product.rating === filter[index])
            .map(item => 
                filteredProducts.push(new Product(
                    item.id,
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

    fillFilteredProductArray(filter: Filter, products: Product[]){
        this.filter = filter;
        this.listOfProducts = products;
        
    for (let index = 0; index < this.filter.platforms.length; index++) {
        this.filteredPlatformProducts = this.filterProducts(filter.platforms, products);
      }
  
      for (let index = 0; index < this.filter.companies.length; index++) {
        this.filteredCompanyProducts = this.filterProducts(filter.companies, products);
      }
  
      for (let index = 0; index < this.filter.ratings.length; index++) {
        this.filteredRatingProducts = this.filterProducts(filter.ratings, products);
      }
    }

    returnFilteredProducts(){
        if(this.filter.platforms.length !== 0 && this.filter.companies.length !== 0 && this.filter.ratings.length !== 0){
            let firstIntersection = this.compareFilteredProductsArray(this.filteredPlatformProducts, this.filteredCompanyProducts);
            return this.listOfFilteredProducts = this.compareFilteredProductsArray(firstIntersection, this.filteredRatingProducts);
          }
          
          
          if(this.filter.platforms.length !== 0 && this.filter.companies.length !== 0){
            return this.listOfFilteredProducts = this.compareFilteredProductsArray(this.filteredPlatformProducts, this.filteredCompanyProducts);
            
          }
          
          
          if(this.filter.platforms.length !== 0 && this.filter.ratings.length !== 0){
            return this.listOfFilteredProducts = this.compareFilteredProductsArray(this.filteredPlatformProducts, this.filteredRatingProducts);
            
          }
          
          if(this.filter.companies.length !== 0 && this.filter.ratings.length !== 0){
            return this.listOfFilteredProducts = this.compareFilteredProductsArray(this.filteredCompanyProducts, this.filteredRatingProducts);
            
          }
          
          if(this.filter.platforms.length !== 0){
            return this.filteredPlatformProducts;
          }
          
          if(this.filter.companies.length !== 0){
            return this.filteredCompanyProducts;
          }
          
          if(this.filter.ratings.length !== 0){
            return this.filteredRatingProducts;
          }

          if(!this.listOfFilteredProducts.length){
            return this.listOfProducts;
          }


          return this.listOfProducts;
    }



    compareFilteredProductsArray(firstProductArray: Product[], secondProductArray: Product[]){
            return firstProductArray.filter((product: Product) => {
                return secondProductArray.find((o: Product) =>{ 
                    return product.id === o.id;                   
                });
            });

    }
}