import { Role } from "../enums/role.enums";

export class Account{
    private _username: string;
    private _password: string;
    private _role: Role

    constructor(username: string, password: string, role: Role){
        this._username = username;
        this._password = password;
        this._role = role;
    }

    public get username(){
        return this._username;
    }

    public set username(value: string){
        this._username = value;
    }

    public get password(){
        return this._password;
    }

    public set password(value: string){
        this._password = value;
    }

    public get role(){
        return this._role;
    }

    public set role(value: Role){
        this._role = value;
    }
}