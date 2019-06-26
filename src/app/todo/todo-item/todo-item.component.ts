import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  task: Todo;

  @Output()
  updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  updateTodoEmit() {
    this.updateTodo.emit(this.task);
  }


  constructor() { }

  ngOnInit() {
  }

}
