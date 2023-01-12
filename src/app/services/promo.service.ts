import { Injectable } from "@angular/core";
import { Promo } from "../models/promo.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root',
  })
export class PromoService{
    private discount: number = 0;

    constructor(private http: HttpService){}

    getPromoCode(promoCode: string){
        const promo: Promo = new Promo(promoCode, 0);
        return this.http.makePostRequest("/promo", promo)
        
    }
    
    returnDiscount(){
        return this.discount;

    }
}