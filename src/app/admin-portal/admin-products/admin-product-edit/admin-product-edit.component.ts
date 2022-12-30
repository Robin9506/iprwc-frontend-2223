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
  id: number = 0;

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';



  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =+ this.activatedRoute.snapshot.paramMap.get('id')!;
    this.setFormVariables();

  }


  

  setFormVariables(){
    this.product = this.productService.getSingleProduct(this.id)!;
    this.productName = this.product.name;
    this.productPrice = this.product.price;
    this.productDescription = this.product.description;
    this.productCompany = this.product.company;
    this.productImageLink = this.product.imageLink;
    this.productRating = this.product.rating;
    this.productPlatform = this.product.platform;
  }

  editProduct(form: NgForm, id: number){
    console.log(form);
    console.log(id);
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }
}
