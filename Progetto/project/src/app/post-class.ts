import { Post } from "./post"

export class PostClass implements Post {
    date:number | null
    time:number | null
    platform:string[]
    players:number[]
    text:string | null
    description:string | null
    gamertag: string | null
    authorId: number|null
    authorName:string
    prenotato:number[]
    

    constructor(date:number | null,time:number | null ,platform:string[],players:number[],text:string | null,description:string | null,gamertag:string|null,authorId:number|null,authorName:string,prenotato:number[]){
        this.date = date
        this.time = time
        this.platform = platform
        this.players = players
        this.text = text
        this.description = description
        this.gamertag = gamertag
        this.authorId = authorId
        this.authorName = authorName
        this.prenotato = prenotato
        
    }
}
