import {Product} from './product.model';

export class Cart {
  private _product: Product;
  private _amount: number;

  constructor(product: Product, amount: number) {
    this._product = product;
    this._amount = amount;
    } 

  public get product(){
    return this._product;
    }

  public set product(value: Product){
    this._product = value;
    }

  public get amount(){
    return this._amount;
    }

  public set amount(value: number){
    this.amount = value;
    }


}