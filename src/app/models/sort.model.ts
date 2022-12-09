import { SortStategy } from "../enums/sort.enum";

export class Sort{
    private _sortStrategy: SortStategy;
    private _ascending: boolean;

    constructor(sortStrategy: SortStategy, ascending: boolean){
        this._sortStrategy = sortStrategy;
        this._ascending = ascending;
    }

    public get sortStrategy(){
        return this._sortStrategy;
    }

    public set sortStrategy(value: SortStategy){
        this._sortStrategy = value;
    }

    public get ascending(){
        return this._ascending;
    }

    public set ascending(value: boolean){
        this._ascending = value;
    }

}