import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';


@Injectable({providedIn: 'root'})
export default class TodoListApi {
    fetchTodolist(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Todo('take the ball', false),
                    new Todo('dribbling', false),
                    new Todo('kidding', false),
                    new Todo('scoring', false)
                ]);
            }, 1000);
        });
    }
}
