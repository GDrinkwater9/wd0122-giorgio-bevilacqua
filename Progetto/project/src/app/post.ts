export interface Post {
    date:number | null
    time:number | null
    platform:string[]
    players:number[]
    text:string | null
    description:string | null
    gamertag:string | null
    authorId:number|null
    authorName:string
    prenotato:number[]
    id?:number
}
