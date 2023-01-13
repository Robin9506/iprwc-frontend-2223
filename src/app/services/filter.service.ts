import { Injectable } from "@angular/core";
import { Filter } from "../models/filter.model";
import { Product } from "../models/product.model";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root',
  })
export class FilterService{
    platformFilters: string[] = [];
    companyFilters: string[] = [];
    ratingFilters: number[] = [];

    maxRating: number = 5;

    products: Product[]= [];
    
    constructor(private productService: ProductService){
    }

    getAllFilters(){
        this.productService.getProductsByServer().subscribe({
            next: (products)=> {
                this.products = products;
            },
            complete: () =>{
                console.log(this.products);
                this.getCompanyFilters();
                this.getPlatformFilters();
                this.getRatingFilters();
            }

        });

    }

    getCompanyFilters(){     
        for (let product = 0; product < this.products.length; product++) {
            if(!this.companyFilters.includes(this.products[product].company)){
                this.companyFilters.push(this.products[product].company);           
            }
        }
        return this.companyFilters;
    }

    getPlatformFilters(){
        for (let product = 0; product < this.products.length; product++) {
            if(!this.platformFilters.includes(this.products[product].platform)){
                this.platformFilters.push(this.products[product].platform);           
            }
        }

        return this.platformFilters;
    }

    getRatingFilters(){
        for (let index = 1; index <= this.maxRating; index++) {
            if(!this.ratingFilters.includes(index)){
                this.ratingFilters.push(index);           
            }     
        }

        return this.ratingFilters;
    }
}