export class Filter{
    private _platform: string;
    private _company: string
    private _rating: number;

    constructor(platform: string, company: string, rating: number){
        this._platform = platform;
        this._company = company;
        this._rating = rating;
    }

    public get platform(){
        return this._platform;
    }

    public set platform(value: string){
        this._platform = value;
    }

    public get company(){
        return this._company;
    }

    public set company(value: string){
        this._company = value;
    }

    public get rating(){
        return this._rating;
    }

    public set rating(value: number){
        this._rating = value;
    }
}