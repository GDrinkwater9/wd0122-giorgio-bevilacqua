import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private http:HttpClient) { }

  authUser = {
    username:'',
    email: '',
    password:''
  }



  ngOnInit(): void {
  }

  register(){
    this.userService.registerUser(this.authUser).subscribe(res => {
      console.log(res)
      localStorage.setItem("user",JSON.stringify(this.authUser))
      
      this.router.navigate(['/'])
      
    })
  }



}
