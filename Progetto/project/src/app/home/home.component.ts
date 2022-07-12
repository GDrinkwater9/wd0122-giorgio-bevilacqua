import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postSrv:PostServiceService, private authSrv:AuthService) { }

  edit:boolean[] = []
  id!:number
  utente:any
  prenotazioni:any
  posts:Post[] = []



  ngOnInit(): void {
  
    this.utente = JSON.parse(localStorage.getItem("user")!) 
    this.postSrv.getAll().subscribe(res =>{
      this.posts = res
     
      this.edit.push(false)

    })

  }

  isUserLogged(){
    return this.authSrv.isUserLogged()
  }

prenotato:boolean = false

checkId(i:number){
if(this.utente.id == this.posts[i].authorId){
  return false
}else{
  return true
} 
}

partialPosts:Partial<Post> = {
  date:0,time:0,platform:[],players:[],text:'',gamertag:'',description:''
}

editPost(i:number){
  this.edit[i] = true
}

saveEdit(i:number){
  let id = this.posts[i].id
  if(id){
    this.edit[i] = false
    this.postSrv.modificaPost(id,this.posts[i]).subscribe((res:any) =>{
      this.postSrv.getAll().subscribe(res =>{
        this.posts = res
      })
    })
  }

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Lobby modificata con successo',
    showConfirmButton: false,
    timer: 1500
  })
  }



deletePost(i:number){
  
let id = this.posts[i].id
  if(id){
    this.postSrv.eliminaPost(id).subscribe((res:any) =>{
      this.postSrv.getAll().subscribe(res =>{
        this.posts = res
      })
    })
  }
   
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Lobby eliminata con successo',
  showConfirmButton: false,
  timer: 1500
})
}



prenota(i:number){
let prenotazione:any = {
  idLobby:this.posts[i].id,
  idHost:this.posts[i].authorId,
  idPlayer:this.utente.id,
  idNamePlayer:this.utente.username

} 
let id = this.posts[i].id || 0
let array:number[]= this.posts[i].prenotato
array.push(this.utente.id)
this.postSrv.modificaPost(id,{prenotato:array}

).subscribe()
this.postSrv.addPrenotazione(prenotazione).subscribe(res=>{
  this.postSrv.getAll().subscribe(res =>{
    this.posts = res
   
    this.edit.push(false)

  })
this.prenotato = true
})
}

getPrenotazioni(){
  this.postSrv.getPrenotazioni().subscribe((res:any)=>{
    this.prenotazioni = res
  })
}

checkPrenotato(i:number){
if(this.posts[i].prenotato.includes(this.utente.id)){
return false
}else{
  return true
}

  }



}


