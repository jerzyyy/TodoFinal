import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  task: Todo ;
  handleCheckBoxChange() {
    this.task.isDone = !this.task.isDone;
  }

  constructor() { }

  ngOnInit() {
  }

}
