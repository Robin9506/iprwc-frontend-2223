import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {
  product: Product;
  id: number = 0;

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.id =+ this.activatedRoute.snapshot.paramMap.get('id')!;
    this.setProductVariables();
  }

  setProductVariables(){
    this.product = this.productService.getSingleProduct(this.id)!;
    this.productName = this.product.name;
    this.productPrice = this.product.price;
    this.productDescription = this.product.description;
    this.productCompany = this.product.company;
    this.productImageLink = this.product.imageLink;
    this.productRating = this.product.rating;
    this.productPlatform = this.product.platform;
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }

  addSingleProductToCart(){
    this.cartService.addToCart(this.product);
  }

}
