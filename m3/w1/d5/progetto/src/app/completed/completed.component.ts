import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassTodo } from '../class/class-todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  task:ClassTodo[]|undefined = undefined
  number!: number;

 constructor(private todoService: TodosService, private router:Router){
    this.task = todoService.task
 }


  ngOnInit(): void {
  }


  elimina(id:number){

  }

}
