import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productList: Product[] = [] ;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product){
    this.cartService.addToCart(product);
  }

  getProductRating(item: Product): Array<number> {
    return Array(item.rating);
  }

  getNonRating(item: Product): Array<number> {
    return Array(5 - item.rating);
  }

  navigateToSingleProduct(id: number){
    this.router.navigate(["product/" + id]);
  }


}
