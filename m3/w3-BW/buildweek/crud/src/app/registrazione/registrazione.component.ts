import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private crudservice:CrudService) { }

  ngOnInit(): void {
  }
  authData = {
    nome: '',
    cognome:'',
    email : '',
    password : ''
  }

  register(){
    this.crudservice.registerUser(this.authData)
    .subscribe(data => {
      console.log(data)
    })
  }

}
