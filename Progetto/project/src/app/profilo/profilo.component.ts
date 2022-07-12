import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor(private authSrv:AuthService, private postSrv:PostServiceService) { }

 
  utente:any
  lobby:Post[]=[]
  prenotazioni:any[]=[]

  ngOnInit(): void {
    this.utente = JSON.parse(localStorage.getItem("user")!) 
    this.getLobby()
    this.getPrenotazioni()
  }


  isUserLogged(){
    return this.authSrv.isUserLogged()
  }

  getLobby(){
    this.postSrv.getAll().subscribe((res:any) =>{
      this.lobby = res.filter((p:any)=> p.authorId == this.utente.id)
    })
  }

  getPrenotazioni(){
    this.postSrv.getPrenotazioni().subscribe((res:any)=>{
      this.prenotazioni = res.filter((p:any)=> p.idHost == this.utente.id)
    })
  }


}
