export class Filter{
    private _platform: string;
    private _company: string

    constructor(platform: string, company: string){
        this._platform = platform;
        this._company = company;
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
}