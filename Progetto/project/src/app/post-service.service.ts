import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  
  constructor(private http:HttpClient) { }

  apiPosts = "http://localhost:4202/posts"

  apiPrenotazioni = "http://localhost:4202/prenotazioni"

  addPost(p:Post){
    return this.http.post<Post>(this.apiPosts,p)
  }

  addPrenotazione(p:any){
    return this.http.post(this.apiPrenotazioni,p)
  }

  getPrenotazioni(){
    return this.http.get(this.apiPrenotazioni)
  }


  getAll(){
    return this.http.get<Post[]>(this.apiPosts)
  }

  modificaPost(id:number,p:Partial<Post>){
    return this.http.patch(this.apiPosts+"/" +id,p)
  }

  eliminaPost(id:number){
    return this.http.delete(this.apiPosts + "/"+id)
  }
}
