import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { FormsModule } from '@angular/forms';
import { ProductSortComponent } from './product/product-sort/product-sort.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { CartThumbnailComponent } from './cart/cart-thumbnail/cart-thumbnail.component';
import { PromoCodeComponent } from './cart/promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    ProductSortComponent,
    TruncatePipe,
    CartThumbnailComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
