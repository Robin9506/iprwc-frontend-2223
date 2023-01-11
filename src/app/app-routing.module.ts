import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './customer-portal/profile/profile.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminProductsComponent } from './admin-portal/admin-products/admin-products.component';
import { AdminPromosComponent } from './admin-portal/admin-promos/admin-promos.component';
import { AdminAccountsComponent } from './admin-portal/admin-accounts/admin-accounts.component';
import { AdminProductEditComponent } from './admin-portal/admin-products/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './admin-portal/admin-products/admin-product-add/admin-product-add.component';
import { AdminOrdersComponent } from './admin-portal/admin-orders/admin-orders.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ProductSingleComponent } from './product/product-single/product-single.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { CustomerOrdersComponent } from './customer-portal/customer-orders/customer-orders.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'product/:id', component: ProductSingleComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'customer', component: CustomerPortalComponent, children: [
    {path: '', component: ProfileComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'my-orders', component: CustomerOrdersComponent},
  ]},
  { path: 'product-add', component: AdminProductAddComponent},
  { path: 'product-edit/:id', component: AdminProductEditComponent},
  { path: 'admin', component: AdminPortalComponent, children: [
    {path: '', component: AdminProductsComponent},
    {path: 'accounts', component: AdminAccountsComponent},
    {path: 'products', component: AdminProductsComponent},
    {path: 'promos', component: AdminPromosComponent},
    {path: 'orders', component: AdminOrdersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
