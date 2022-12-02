export class Product{
    private _name: string;
    private _price: number;
    private _description: string;
    private _company: string;

    constructor(
        name: string, 
        price: number, 
        description: string, 
        company: string){

            this._name = name;
            this._price = price;
            this._description = description;
            this._company = company;
    }

    public get name(){
        return this._name;
    }

    public set name(value: string){
        this._name = value;
    }

    public get price(){
        return this._price;
    }

    public set price(value: number){
        this._price = value;
    }

    public get description(){
        return this._description;
    }

    public set description(value: string){
        this._description = value;
    }

    public get company(){
        return this._company;
    }

    public set company(value: string){
        this._company = value;
    }
    
    

}