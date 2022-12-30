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
    private adminService: AdminService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshProductList();

  }

  refreshProductList(){
    this.productList = this.productService.getProducts();
  }

  navigateToEditProduct(productId: number){
    this.editing = true;
    this.router.navigate(['product-edit/' + productId]);
  }

  deleteProduct(productId: number){
    this.productService.deleteProduct(productId);
    this.refreshProductList();
  }

}
