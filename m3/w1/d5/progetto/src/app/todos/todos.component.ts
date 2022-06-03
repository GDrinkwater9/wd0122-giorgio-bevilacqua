import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassTodo } from '../class/class-todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  task:ClassTodo[]|undefined = undefined 
  number!: number;

 constructor(private todoService: TodosService, private router:Router){
   
 }

  ngOnInit(): void {
  this.todoService.getTodos(false).then(res=>{
    this.task = res
  })
  }



completa(id:number){
  this.todoService.updateTodo(id).then((res: any)=>{
 
      this.task = res
   
  })
  

}

}
