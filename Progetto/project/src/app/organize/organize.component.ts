import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Post } from '../post';
import { PostClass } from '../post-class';
import { PostServiceService } from '../post-service.service';
import { User } from '../user';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.scss']
})
export class OrganizeComponent implements OnInit {

  constructor(private postSrv:PostServiceService, private router:Router, private authSrv:AuthService) { }

 author:User = this.authSrv.getLoggedUserData()

 post:Post = new PostClass(null,null,[],[],null,null,null,this.author.id,this.author.username,[])

  ngOnInit(): void {
  }

  addPost(){
    this.postSrv.addPost(this.post).subscribe(res =>{
      console.log(res);
      this.post = res
      this.router.navigate(['/home'])
    })
  }



}
