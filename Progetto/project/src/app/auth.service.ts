import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  apiUrl:string = 'http://localhost:4202/login'
  
  isLoggedIn:boolean = this.isUserLogged()

  login(authData:any){
    return this.http.post(this.apiUrl,authData)
  }

  logUser(token:string,user:User){
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(user))

    this.isLoggedIn = true
  }
  

  logout():boolean{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true 

  }

  isUserLogged(){
    return localStorage.getItem('token') != null
  }

getLoggedUserData(){
  return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')||'{}'):null
}



}
