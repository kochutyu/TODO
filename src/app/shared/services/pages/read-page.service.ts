import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { Router } from '@angular/router';
import { ShowTodoService } from './show-todo.service';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadPageService {
  $todos: Subscription;

  constructor(
    private router: Router,
    private showTodoS: ShowTodoService,
    private todoS: TodosService
  ) { }

  readTodo(id: number): void {

    if (isNaN(id)) { // if id is NaN

      this.router.navigate(['/read']);
    } else { // if id is number
      this.$todos = this.todoS.getTodos().subscribe((todos: ITodo[]) => {
        this.showTodoS.todo = todos.find((todo: ITodo) => todo.id === id);

        if (this.showTodoS.todo) { // if id exist

          this.showTodoS.statusContentInit = true;
          this.router.navigate(['/read', id]);
        } else { // if id not exist

          this.router.navigate(['/read']);
        }

        this.$todos.unsubscribe(); // unsubscribe
      })
    }

  }

}
