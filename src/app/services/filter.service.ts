import { Injectable } from "@angular/core";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root',
  })
export class FilterService{
    platformFilters: string[] = [];
    companyFilters: string[] = [];
    
    constructor(private productService: ProductService){
    }

    getCompanyFilters(){
        const products = this.productService.getProducts();
        for (let product = 0; product < products.length; product++) {
            if(!this.companyFilters.includes(products[product].company)){
                this.companyFilters.push(products[product].company);           
            }
        }

        return this.companyFilters;
    }

    getPlatformFilters(){
        const products = this.productService.getProducts();
        for (let product = 0; product < products.length; product++) {
            if(!this.platformFilters.includes(products[product].platform)){
                this.platformFilters.push(products[product].platform);           
            }
        }

        return this.platformFilters;
    }
}