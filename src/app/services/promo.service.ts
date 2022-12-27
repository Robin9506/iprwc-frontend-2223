import { Injectable } from "@angular/core";
import { Promo } from "../models/promo.model";

@Injectable({
    providedIn: 'root',
  })
export class PromoService{
    private promoCodes: Promo[] = [
        new Promo("edwin", 99),
        new Promo("rrr95", 95),
        new Promo("iprwc", 75),
        new Promo("rrr", 50),
        new Promo("2023", 10)
    ];
    
    checkPromoCode(promoCode: string){
        for (let index = 0; index < this.promoCodes.length; index++) {
            const currentPromo = this.promoCodes[index];

            if(promoCode === currentPromo.code){
                return this.returnPromoDiscount(currentPromo); 
            }
        }

        return 0;

    }

    returnPromoDiscount(promo: Promo){
        return promo.discount;
    }
}