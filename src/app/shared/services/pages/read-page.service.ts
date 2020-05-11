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

    if (isNaN(id)) { // IF ID IS NaN

      this.router.navigate(['/read']);
    } else { // IF ID IS NUMBER
      this.$todos = this.todoS.getTodos().subscribe((todos: ITodo[]) => {
        this.showTodoS.todo = todos.find((todo: ITodo) => todo.id === id);

        if (this.showTodoS.todo) { // IF ID EXIST

          this.showTodoS.statusContentInit = true;
          this.router.navigate(['/read', id]);
        } else { // IF ID NOT EXIST

          this.router.navigate(['/read']);
        }

        this.$todos.unsubscribe(); // UNSUBSCRIBE
      })
    }

  }
}
