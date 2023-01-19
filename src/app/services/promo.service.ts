import { Injectable } from "@angular/core";
import { Promo } from "../models/promo.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root',
  })
export class PromoService{
    private discount: number = 0;

    constructor(private http: HttpService){}

    addPromoToServer(promo: Promo){
        return this.http.makePostRequest("/promo/new", promo);
    }

    getPromoFromServer(){
        return this.http.makeGetRequest("/promo");
    }

    getSinglePromoFromServer(promoId: string){
        return this.http.makeGetRequest("/promo/" + promoId);
    }

    getPromoCode(promoCode: string){
        const promo: Promo = new Promo("default-id", promoCode, 0);
        return this.http.makePostRequest("/promo", promo)
        
    }

    updatePromo(promo: Promo, id: string){
        return this.http.makePutRequest("/promo/" + id, promo);
    }

    deletePromo(promoCode: string){
        return this.http.makeDeleteRequest("/promo/"+ promoCode);

    }
    
    returnDiscount(){
        return this.discount;

    }
}