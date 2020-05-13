import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/shared/shared.interface';
import { CreatePageService } from './create-page.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodosService } from 'src/app/shared/services/todos.service';

@Injectable({
  providedIn: 'root'
})
export class UpdatePagesService {

  todo: ITodo;
  $todo: Subscription;
  $putTodo: Subscription;





  constructor(
    private router: Router,
    private createPageS: CreatePageService,
    private _snackBar: MatSnackBar,
    private todoS: TodosService
  ) { }





  getTodoIdFromURL(): number {

    return +this.router.url.slice(19);
  }





  getTodoData(): void {

    if (this.todoS.getTodoJSON() !== null) { // IF TODO IS IN LOCAL STORAGE
      this.todo = this.todoS.getTodoFromJSON();
      this.createPageS.name = this.todo.name;
      this.createPageS.description = this.todo.description;
      if (this.todo.id !== this.getTodoIdFromURL()) { // IF TODO ID !== URL.ID => GET TODO DATE FROM DATABASE

        this.$todo = this.todoS.getTodo(this.getTodoIdFromURL()).subscribe((todo: ITodo) => {
          this.todo = todo;
          this.createPageS.name = todo.name;
          this.createPageS.description = todo.description;
          this.todoS.setTodoJSON(this.todo);
          this.$todo.unsubscribe();
        }, err => { // IF TODO ID NOT EXIST

          console.log(err);
          this.router.navigate(['/admin', 'read']);
        })
      }
    }
  }





  getNewTodo(id: number): ITodo {
    return { name: this.createPageS.name, description: this.createPageS.description, createdAt: this.todo.createdAt, editedAt: new Date(), id };
  }





  updateTodo(): void {
    const id = this.getTodoIdFromURL();
    const todo: ITodo = this.getNewTodo(id);

    this.$putTodo = this.todoS.putTodo(todo).subscribe(res => {

      this.router.navigate(['/admin', 'read']);

      this.createPageS.resetData();

      // SHOW MESSAGE
      this._snackBar.open('TODO was', 'updated', {
        duration: 3000,
      });

      this.$putTodo.unsubscribe();
    }, err => {
      console.log(err);
    })
  }
}
