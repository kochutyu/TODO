import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { Router } from '@angular/router';
import { ShowTodoService } from './show-todo.service';

@Injectable({
  providedIn: 'root'
})
export class ReadPageService {

  todo: ITodo;

  constructor(
    private router: Router,
    private showTodoS: ShowTodoService
  ) { }

  readTodo(todo: ITodo): void {
    this.todo = todo;
    this.showTodoS.todo = todo;
    this.router.navigate(['/read', `${todo.id}`]);
  }
}
