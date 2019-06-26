import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input()
  tasks: Array<Todo> ;

  @Output()
  updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  isEmpty() {
    return this.tasks.length === 0;
  }

  updateTodoEvent(todo: Todo){
    this.updateTodo.emit(todo)
  }

  constructor() { }

  ngOnInit() { }

}
