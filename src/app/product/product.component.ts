import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Product } from '../models/product.model';
import { Sort } from '../models/sort.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getProductsByServer().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.filteredProducts = products;
      },
      complete: () =>{
        console.log(this.products);
      }
    });
  }

  ngDoCheck(){

  }
  
  getProducts(){
    this.products = this.productService.getProducts();
  }
  
  onFilterSelected(filterObject: Filter){
    this.filteredProducts = this.productService.getProductsByFilter(filterObject, this.filteredProducts);
  }
  
  onSortSelected(sort: Sort){
    this.filteredProducts = this.productService.getProductsBySort(sort, this.filteredProducts);
  }

}
