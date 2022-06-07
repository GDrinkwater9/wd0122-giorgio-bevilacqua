import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-forms',
  templateUrl: './driven-forms.component.html',
  styleUrls: ['./driven-forms.component.scss']
})
export class DrivenFormsComponent implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm
  constructor() { }

  ngOnInit(): void {
  
    
  }

  
  submit(){
    console.log(this.form);
    
 
   }
}
