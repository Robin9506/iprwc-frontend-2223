import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
productList: Product[] = [];
editing: boolean = false;

  constructor(
    private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    this.refreshProductList();

  }

  refreshProductList(){
    this.productService.getProductsByServer().subscribe({
      next: (products: Product[]) =>{
        this.productList = products;
      }
    });
    
  }

  navigateToEditProduct(productId: string){
    this.editing = true;
    this.router.navigate(['product-edit/' + productId]);
  }

  navigateToAddProduct(){
    this.editing = true;
    this.router.navigate(['product-add/']);
  }

  deleteProduct(productId: string){
    this.productService.deleteProduct(productId).subscribe({
      complete: () => {
        this.refreshProductList();
      }
    });
  }

}
