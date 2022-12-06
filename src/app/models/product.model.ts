export class Product{
    private _name: string;
    private _price: number;
    private _description: string;
    private _company: string;
    private _imageLink: string;
    private _rating: number

    constructor(
        name: string, 
        price: number, 
        description: string, 
        company: string,
        imageLink: string,
        rating: number){

            this._name = name;
            this._price = price;
            this._description = description;
            this._company = company;
            this._imageLink = imageLink;
            this._rating = rating;
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

    public get imageLink(){
        return this._imageLink;
    }

    public set imageLink(value: string){
        this._imageLink = value;
    }

    public get rating(){
        return this._rating;
    }

    public set rating(value: number){
        this._rating = value;
    }
    
    

}