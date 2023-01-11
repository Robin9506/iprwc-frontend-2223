import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerPortalComponent } from './customer-portal.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RolePipe } from '../pipe/enum.pipe';



@NgModule({
  declarations: [    
    CustomerPortalComponent,
    CustomerHeaderComponent,
    CustomerOrdersComponent,
    ProfileComponent,
    RolePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports:[ 
    CustomerPortalComponent, 
    CustomerHeaderComponent, 
    CustomerOrdersComponent,
    ProfileComponent]
})
export class CustomerPortalModule { }
