import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartThumbnailComponent } from './cart-thumbnail/cart-thumbnail.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';



@NgModule({
  declarations: [
    CartComponent,
    CartThumbnailComponent,
    PromoCodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    CartThumbnailComponent,
    PromoCodeComponent
  ]
})
export class CartModule { }
