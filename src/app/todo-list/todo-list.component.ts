import { Component, Input, OnInit } from '@angular/core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  faMinusCircle = faMinusCircle;

  @Input() lists:any;

  searchList: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  removeItem(index: number){
    this.lists.splice(index, 1);
    localStorage.setItem("my_list", JSON.stringify(this.lists));
  }

}
