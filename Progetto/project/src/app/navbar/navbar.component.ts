import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  UserLoggedIn!:boolean 
  utente!:any 
  

  

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.UserLoggedIn = this.authService.isUserLogged()
      this.utente = JSON.parse(localStorage.getItem("user")!) 
    })
  }
  
  logout(){
    this.authService.logout()
    this.router.navigate(['/'])
   }

 
  
   

}
