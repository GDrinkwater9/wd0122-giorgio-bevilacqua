export class PhotoClass {
    albumId!:number 
    id!:number
    title!:string
    url!:string
    thumbnailUrl!:string 
    data!:any

    constructor(title:string,url:string){
        this.title = title
        this.url = url

    }
}
