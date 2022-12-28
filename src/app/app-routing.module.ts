import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminProductsComponent } from './admin-portal/admin-products/admin-products.component';
import { AdminPromosComponent } from './admin-portal/admin-promos/admin-promos.component';
import { AdminAccountsComponent } from './admin-portal/admin-accounts/admin-accounts.component';
import { AdminProductEditComponent } from './admin-portal/admin-products/admin-product-edit/admin-product-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product-edit/:id', component: AdminProductEditComponent},
  { path: 'admin', component: AdminPortalComponent, children: [
    {path: '', component: AdminAccountsComponent},
    {path: 'accounts', component: AdminAccountsComponent},
    {path: 'products', component: AdminProductsComponent},
    {path: 'promos', component: AdminPromosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
