import { Component, OnInit } from '@angular/core';
import { PhotoClass } from './photo-class';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  photo:any

  count = 0

  constructor(private photoSrv:PhotoService){}


  ngOnInit(){
    this.photoSrv.getPhotos().subscribe((res)=>{
      this.photo = res.splice(0,10)
    })
  }
like(){
  this.count ++
}

}
