export class Filter{
    private _platforms: string[];
    private _companies: string[];
    private _ratings: number[];

    constructor(platform: string[], company: string[], rating: number[]){
        this._platforms = platform;
        this._companies = company;
        this._ratings = rating;
    }

    public get platforms(){
        return this._platforms;
    }

    public set platforms(value: string[]){
        this._platforms = value;
    }

    public get companies(){
        return this._companies;
    }

    public set companies(value: string[]){
        this._companies = value;
    }

    public get ratings(){
        return this._ratings;
    }

    public set ratings(value: number[]){
        this._ratings = value;
    }
}