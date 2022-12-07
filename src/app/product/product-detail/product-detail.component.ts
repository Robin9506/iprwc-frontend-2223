import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productList: Product[] = [] ;

  constructor(private cartSerivce: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product){
    this.cartSerivce.addToCart(product, 1);
  }

  getProductRating(item: Product): Array<number> {
    return Array(item.rating);
  }

  getNonRating(item: Product): Array<number> {
    return Array(5 - item.rating);
  }

}
