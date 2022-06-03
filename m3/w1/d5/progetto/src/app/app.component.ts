import { Component } from '@angular/core';
import { ClassTodo } from './class/class-todo';
import { TodosService } from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  task:ClassTodo[]
  newTask!:ClassTodo
  
  constructor(private todoService: TodosService){
    this.task = todoService.task
    this.newTask = new ClassTodo(1,'',false)
    
 }
 ngOnInit(){

 }



}
