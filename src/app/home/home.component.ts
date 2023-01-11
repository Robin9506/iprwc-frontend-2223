import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.featuredProducts = this.productService.getFeaturedProducts();
  }

  navigateToProducts(){
    this.router.navigate(["product"]);
  }

  navigateToSingleProduct(id: number){
    this.router.navigate(["product/" + id]);
  }

}
