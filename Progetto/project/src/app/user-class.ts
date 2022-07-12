import { User } from "./user";

export class UserClass implements User {
    username: string;
    email: string;
    password: string;
    id!:number | null

    constructor(username:string,email:string,password:string){
        this.username = username
        this.email = email
        this.password = password

    }
}
