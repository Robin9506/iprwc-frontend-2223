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
  isRetrievingProducts: boolean = false;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.isRetrievingProducts = true;
    this.productService.getProductsByServer().subscribe({
      next: (products: Product[]) => {
        console.log(products);
        this.products = products;
        this.filteredProducts = products;
      },
      complete: () =>{
        console.log(this.products);
        this.isRetrievingProducts = false;

      }
    });
  }
  
  onFilterSelected(filterObject: Filter){
    this.filteredProducts = this.productService.getProductsByFilter(filterObject, this.products);
  }
  
  onSortSelected(sort: Sort){
    this.filteredProducts = this.productService.getProductsBySort(sort, this.products);
  }

}
