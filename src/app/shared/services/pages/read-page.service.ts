import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { Router } from '@angular/router';
import { ShowTodoService } from './show-todo.service';
import { TodosService } from '../todos.service';

@Injectable({
  providedIn: 'root'
})
export class ReadPageService {

  constructor(
    private router: Router,
    private showTodoS: ShowTodoService,
    private todoS: TodosService
  ) { }

  readTodo(id: number): void {
  
    this.todoS.getTodo(id).subscribe((todo: ITodo) => {
      this.showTodoS.todo = todo;
      this.showTodoS.statusContentInit = true;
    })

    this.router.navigate(['/read', id]);
  }

}
