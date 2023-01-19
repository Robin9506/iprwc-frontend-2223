import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promo } from 'src/app/models/promo.model';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-admin-promos',
  templateUrl: './admin-promos.component.html',
  styleUrls: ['./admin-promos.component.scss']
})
export class AdminPromosComponent implements OnInit {
  promoList: Promo[] = [];
  promoCode: string = '';
  discount: number = 0;

  constructor(private promoService: PromoService, private router: Router) { }

  ngOnInit(): void {
    this.getPromoList();
  }

  getPromoList(){
    this.promoService.getPromoFromServer().subscribe({
      next: (promos) => {
        this.promoList = promos;
      },
      complete: () => {
        console.log(this.promoList)
      }
    })
  }

  addPromo(){
    const promo = new Promo("", this.promoCode, this.discount)
    this.promoService.addPromoToServer(promo).subscribe({
      complete: ()=>{
        this.getPromoList();
      }
    });
  }

  navigateToEditPromo(promoId: string){
    this.router.navigate(["promo-edit/" + promoId])
  }

  deletePromo(promoId: string){
    this.promoService.deletePromo(promoId).subscribe({
      complete: ()=>{
        this.getPromoList();
      }
    });
  }
}
