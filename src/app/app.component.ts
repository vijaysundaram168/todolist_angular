import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Todo Lists';
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  todoList : string[] = [];

  ngOnInit(): void {
    let listItmes = localStorage.getItem('my_list');
    if(listItmes) {
      this.todoList = JSON.parse(listItmes);
    }
  }
}
