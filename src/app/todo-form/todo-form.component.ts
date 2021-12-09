import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  @Input() listItem:any;
  newTodo: string;
  constructor() { 
    this.newTodo = '';
  } 

  ngOnInit(): void {
  }

  addTodo(){
    this.listItem.unshift(this.newTodo);
    localStorage.setItem("my_list", JSON.stringify(this.listItem));
    this.newTodo = '';
  }

}
