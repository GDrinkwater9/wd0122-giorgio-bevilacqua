import { Injectable } from '@angular/core';
import { ClassTodo } from './class/class-todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {



  constructor() {
  
   }
  
  task:ClassTodo[] = [

    
  ]



  getTodos(comp:boolean):Promise<ClassTodo[]>{
  return new Promise((succ,err)=>{
      setTimeout(()=>{
        let filteredTodos = this.task.filter(e => e.completed == comp)
        succ(filteredTodos)
      },2000)
    })

  }

  addNewTask(task:ClassTodo){
    let n:ClassTodo = new ClassTodo(task.id,task.title,task.completed)
    this.task.push(n)

  
  }
  
  // addTodo(title:string):Promise<any>{
  //   return new Promise
  // }

  updateTodo(id: number):Promise<any>{
    return new Promise(()=>{
      this.task = this.task.map((e)=>{
        if(e.id == id){
          e.completed = !e.completed
          return e
        }
        return e
      })
    })
  }

  // removeTodo(id:number):Promise<any>{

  // }

  
}




