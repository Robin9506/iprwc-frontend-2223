import {Product} from './product.model';

export class Cart {
  private _product: Product;

  constructor(product: Product) {
    this._product = product;
    } 

  public get product(){
    return this._product;
    }

  public set product(value: Product){
    this._product = value;
    }

}