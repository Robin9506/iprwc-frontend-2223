import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit{
  product: Product;
  id: string = "";

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';



  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSingleProduct();

  }

  getSingleProduct(){
    this.productService.getSingleProductFromServer(this.id).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      complete: () => {
        this.setProductVariables();
        console.log(this.product);
      } 
      
    });
    
  }

  setProductVariables(){
    this.productName = this.product.name;
    this.productPrice = this.product.price;
    this.productDescription = this.product.description;
    this.productCompany = this.product.company;
    this.productImageLink = this.product.imageLink;
    this.productRating = this.product.rating;
    this.productPlatform = this.product.platform;
  }

  editProduct(id: string){
    const editedProduct: Product = new Product(
      this.id,
      this.productName,
      this.productPrice,
      this.productDescription,
      this.productCompany,
      this.productImageLink,
      this.productRating,
      this.product.platform
    );

    this.productService.editProduct(editedProduct, id).subscribe();
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }
}
