import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  tasks: Array<Todo> ;

  isEmpty() {
    if (this.tasks === []) {
      return true;
    } else {return false; }
  }

  constructor() { }

  ngOnInit() { }

}
