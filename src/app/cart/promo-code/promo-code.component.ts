import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss']
})
export class PromoCodeComponent implements OnInit {
  @Output() code = new EventEmitter<number>();
  currentPromoCode: string = "";
  currentDiscount: number = 0;
  hasDiscount: boolean = false;

  constructor(private promoService: PromoService) {

   }

  ngOnInit(): void {
  }

  enterCode(promoCode: string){
    const discount: number = this.promoService.checkPromoCode(promoCode);

    if(discount > 0){
      this.currentPromoCode = promoCode;
      this.currentDiscount = discount;
      this.hasDiscount = true;
      this.code.emit(this.currentDiscount);
    }
    else{
      this.hasDiscount = false;
    }

  }

  removeCode(){
    this.currentPromoCode = "";
    this.currentDiscount = 0;
    this.hasDiscount = false;
    this.code.emit(this.currentDiscount);
  }

}
