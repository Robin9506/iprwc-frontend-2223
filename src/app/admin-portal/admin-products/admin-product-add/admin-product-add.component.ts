import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';

  id = 0;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }

  addProduct(){
    const newProduct: Product = new Product(
      this.id,
      this.productName,
      this.productPrice,
      this.productDescription,
      this.productCompany,
      this.productImageLink,
      this.productRating,
      this.productPlatform
    );

    this.productService.addProduct(newProduct);
  }

}
