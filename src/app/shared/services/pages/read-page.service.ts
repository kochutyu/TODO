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
    this.showTodoS.todo = this.todoS.dataSource.find((todo: ITodo) => id === todo.id); // GET TODO FOR PREVIEW
    this.todoS.setTodoJSON(this.showTodoS.todo); // SAVE IN LOCAL STORAGE
    this.router.navigate(['/read', id]); // ROUTE TO PREVIEW OF TODO
  }





}
