import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {

  }

  authData = {
    email:'',
    password: ''
  }


  login(){
    this.auth.login(this.authData).subscribe((res:any) => {
      this.auth.logUser(res.accessToken,res.user)
      this.router.navigate(['/home'])
    })
  }


}
