import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filter: Filter = new Filter("", "", 0);

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();   
    this.filteredProducts = this.productService.getProducts();
  }
  
  ngDoCheck(){
    this.filteredProducts = this.productService.getProductsByFilter(this.filter);
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

  onFilterSelected(filterObject: Filter){
    console.log(filterObject);
    this.filter = filterObject;
  }

}
