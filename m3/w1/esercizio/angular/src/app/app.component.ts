import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Benvenuti';

  user:{id:number,name:string,username:string}[] = []

  ngOnInit(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res =>{
      this.user = res
    })
  }
}

