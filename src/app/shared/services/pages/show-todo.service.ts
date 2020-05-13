import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowTodoService {

  todo: ITodo; // FOR INIT DATA
  statusContentInit: boolean; // IF DATA INIT
  $todo: Subscription;





  constructor(
    private router: Router,
    private todoS: TodosService
  ) { }





  getTodoIdFromURL(): number {
    return +this.router.url.slice(6)
  }





  getDataTodo(): void {

    if (this.todoS.getTodoJSON !== null) { // IF TODO IS IN LOCAL STORAGE

      let todo: ITodo = this.todoS.getTodoFromJSON();

      if (todo.id === this.getTodoIdFromURL()) { // IF TODO ID === URL.ID

        this.todo = todo;
        this.statusContentInit = true;
      } else { // IF TODO ID !== URL.ID => GET TODO DATE FROM DATABASE

        this.$todo = this.todoS.getTodo(this.getTodoIdFromURL()).subscribe((todo: ITodo) => {
          this.todo = todo;
          this.statusContentInit = true;
          this.todoS.setTodoJSON(todo);
          this.$todo.unsubscribe();
        }, err => { // IF TODO ID NOT EXIST

          this.$todo.unsubscribe();
          this.router.navigate(['/read']);
        })
      }
    }
  }





}
