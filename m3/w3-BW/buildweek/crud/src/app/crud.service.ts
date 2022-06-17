import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Ibooks } from './ibooks';

@Injectable({
  providedIn: 'root'
})
export class CrudService  {
  
  constructor(private http:HttpClient) { }
  
  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';
  apimovie:string = 'https://localhost:4201/api/album/popular'
  apiposts = "http://localhost:4201/posts"

  registerUser(user:any) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)//'http://localhost:4201/users/1'
  }
  datiUtente(datiutente:any){
    return this.http.get(this.apiUrl, datiutente)
  }

  removepost(id:number){
    return this.http.delete(this.apiposts +"/" +id)
  }
  
  aggiungipost(p:Ibooks){
    return this.http.post(this.apiposts,p)
  }

  modificapost(id:number,p:Ibooks){
    return this.http.patch(this.apiposts+"/" +id,p)
  }

  getposts():Observable<Ibooks[]>{
    return this.http.get<Ibooks[]>(this.apiposts)
  }
}
