import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Log Out Effettuato',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigate(['/login'])
  }
}
