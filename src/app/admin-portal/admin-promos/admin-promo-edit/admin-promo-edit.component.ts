import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Promo } from 'src/app/models/promo.model';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-admin-promo-edit',
  templateUrl: './admin-promo-edit.component.html',
  styleUrls: ['./admin-promo-edit.component.scss']
})
export class AdminPromoEditComponent implements OnInit {
  promo: Promo;
  id: string = "";

  updatedCode = "";
  updatedDiscount = 0;

  constructor(private promoService: PromoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSinglePromo();
  }

  getSinglePromo(){
    this.promoService.getSinglePromoFromServer(this.id).subscribe({
      next: (promo: Promo) =>{
        this.promo = promo;
      },
      complete: () => {
        this.setPromoVariables();
        console.log(this.promo);
      }
    })
  }

  setPromoVariables(){
    this.updatedCode = this.promo.code;
    this.updatedDiscount = this.promo.discount;
  }

  editPromo(id: string){
    const updatedPromo: Promo = new Promo(
      this.id,
      this.updatedCode,
      this.updatedDiscount
    )

    this.promoService.updatePromo(updatedPromo, id).subscribe();
  }

}
