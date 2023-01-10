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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSortComponent } from './product/product-sort/product-sort.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { CartThumbnailComponent } from './cart/cart-thumbnail/cart-thumbnail.component';
import { PromoCodeComponent } from './cart/promo-code/promo-code.component';
import { ProfileComponent } from './customer-portal/profile/profile.component';
import { UnderHeaderComponent } from './header/under-header/under-header.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminProductsComponent } from './admin-portal/admin-products/admin-products.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminPromosComponent } from './admin-portal/admin-promos/admin-promos.component';
import { AdminAccountsComponent } from './admin-portal/admin-accounts/admin-accounts.component';
import { AdminProductEditComponent } from './admin-portal/admin-products/admin-product-edit/admin-product-edit.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { AdminProductAddComponent } from './admin-portal/admin-products/admin-product-add/admin-product-add.component';
import { AdminOrdersComponent } from './admin-portal/admin-orders/admin-orders.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ProductSingleComponent } from './product/product-single/product-single.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { CustomerHeaderComponent } from './customer-portal/customer-header/customer-header.component';
import { CustomerOrdersComponent } from './customer-portal/customer-orders/customer-orders.component';


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
    PromoCodeComponent,
    ProfileComponent,
    UnderHeaderComponent,
    AdminPortalComponent,
    AdminProductsComponent,
    AdminHeaderComponent,
    AdminPromosComponent,
    AdminAccountsComponent,
    AdminProductEditComponent,
    ModalComponent,
    FooterComponent,
    AdminProductAddComponent,
    AdminOrdersComponent,
    SignUpComponent,
    ProductSingleComponent,
    CustomerPortalComponent,
    CustomerHeaderComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
