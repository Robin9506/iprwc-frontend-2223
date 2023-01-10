import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { RunningModule } from './header/running.module';
import { AuthModule } from './login/auth.module';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { CustomerPortalModule } from './customer-portal/customer-portal.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminPortalModule,
    CustomerPortalModule,
    ProductModule,
    CartModule,
    RunningModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
