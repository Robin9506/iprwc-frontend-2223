import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit{
  product: any;
  id: number = 0;
  productName: string = '';
  productPrice: number = 0;

  productNameInput = new FormControl('product-name');

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =+ this.activatedRoute.snapshot.paramMap.get('id')!;
    this.setFormVariables();
  }


  

  setFormVariables(){
    this.product = this.productService.getSingleProduct(this.id)!;
    this.productName = this.product.name;
    this.productPrice = this.product.price;
  }

}
