import { Injectable } from "@angular/core";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root',
  })
export class AdminService{
    editing: boolean = false;

    constructor(private productService: ProductService){}

    changeEditingStatus(newStatus: boolean){
        this.editing = newStatus;
        console.log(this.editing);
        return this.editing;
    }
}