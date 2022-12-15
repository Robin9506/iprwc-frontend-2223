export class Promo{
    private _code: string;
    private _discount: number;

    constructor(code: string, discount: number){
        this._code = code;
        this._discount = discount;

    }

    public get code(){
        return this._code;
    }

    public set code(value: string){
        this._code = value;
    }

    public get discount(){
        return this._discount;
    }

    public set discount(value: number){
        this._discount = value;
    }


}