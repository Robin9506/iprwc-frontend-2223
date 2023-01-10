import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { ProductComponent } from './product.component';
import { TruncatePipe } from '../pipe/truncate.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    ProductSortComponent,
    ProductSingleComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    ProductSortComponent,
    ProductSingleComponent
  ]
})
export class ProductModule { }
