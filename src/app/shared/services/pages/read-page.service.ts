import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReadPageService {

  todo: ITodo;

  constructor(
    private router: Router
  ) { }

  readTodo(todo: ITodo): void {
    this.todo = todo;
    this.router.navigate(['/read', `${todo.id}`]);
  }
}
