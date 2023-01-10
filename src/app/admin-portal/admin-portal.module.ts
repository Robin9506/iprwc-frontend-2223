import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { ModalComponent } from "../modal/modal.component";
import { AdminAccountsComponent } from "./admin-accounts/admin-accounts.component";
import { AdminOrdersComponent } from "./admin-orders/admin-orders.component";
import { AdminPortalComponent } from "./admin-portal.component";
import { AdminProductAddComponent } from "./admin-products/admin-product-add/admin-product-add.component";
import { AdminProductEditComponent } from "./admin-products/admin-product-edit/admin-product-edit.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { AdminPromosComponent } from "./admin-promos/admin-promos.component";

@NgModule({
    declarations: [    
        AdminPortalComponent,
        AdminProductsComponent,
        AdminHeaderComponent,
        AdminPromosComponent,
        AdminAccountsComponent,
        AdminProductEditComponent,
        AdminProductAddComponent,
        AdminOrdersComponent,
        ModalComponent,

    ],
    imports: [
      BrowserModule,
      CommonModule,
      RouterModule,
      FormsModule,
    ],
    exports:[ 
        AdminPortalComponent,
        AdminProductsComponent,
        AdminHeaderComponent,
        AdminPromosComponent,
        AdminAccountsComponent,
        AdminProductEditComponent,
        AdminProductAddComponent,
        AdminOrdersComponent,
        ModalComponent,
]
  })
  export class AdminPortalModule { }