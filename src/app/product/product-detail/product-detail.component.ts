import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productList: Product[] = [] ;
  rating: number = 5;

  constructor(private cartSerivce: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product){
    this.cartSerivce.addToCart(product, 1);
  }

  getProductRating(item: Product): Array<number> {
    return Array(item.rating);
  }

}
