import { Todo } from '../model/todo';
import { Injectable } from '@angular/core';
import TodoListApi from './todolistApi';


@Injectable({providedIn: 'root'})
export default class TodoServices {
    constructor(private todoListApi: TodoListApi) {}

    private todoList: Array<Todo> ;

    requireTask(): Promise<Array<Todo>> {
        return new Promise (resolve => {
            this.todoListApi.fetchTodolist()
                .then(data => {
                    this.todoList = data;
                    resolve(this.todoList);
                });
        });
    }

    addTask(title: string): Promise<Array<Todo>> {
        return new Promise (resolve => {
            this.todoList = [...this.todoList, new Todo(title, false)];
            resolve(this.todoList);
        });
    }

    removeTask(): Promise<Array<Todo>> {
        return new Promise (resolve => {
            this.todoList = [];
            resolve(this.todoList);
        });
    }
    }
