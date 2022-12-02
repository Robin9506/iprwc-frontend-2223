import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
