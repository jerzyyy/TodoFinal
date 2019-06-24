import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string;

  @Output()
  newtask: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  removetask: EventEmitter<void> = new EventEmitter<void>();

  newTaskAdded() {
    this.newtask.emit(this.title);
    }

  taskRemoved() {
    this.removetask.emit();
  }

  titleChanged(event) {
    this.title = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
