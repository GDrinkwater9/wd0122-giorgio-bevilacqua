import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PhotoClass } from './photo-class';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }
  getPhotos(){
    return this.http.get<object[]>('https://jsonplaceholder.typicode.com/photos')
    
  }
}
