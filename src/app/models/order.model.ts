import { Product } from "./product.model";

export class Order{
    private _orderId: number;
    private _products: Product[];
    private _totalPrice: number;
    private _date: number

    constructor(orderId: number, products: Product[], totalPrice: number, date: number){
        this._orderId = orderId;
        this._products = products;
        this._totalPrice = totalPrice;
        this._date = date;
    }

    public get orderId(){
        return this._orderId;
    }

    public set orderId(value: number){
        this._orderId = value;
    }
    
    public get products(){
        return this._products;
    }

    public set products(value: Product[]){
        this._products = value;
    }

    public get totalPrice(){
        return this._totalPrice;
    }

    public set totalPrice(value: number){
        this._totalPrice = value;
    }

    public get date(){
        return this._date;
    }

    public set date(value: number){
        this._date = value;
    }


    
}