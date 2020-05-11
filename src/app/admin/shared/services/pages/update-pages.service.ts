import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ITodo } from 'src/app/shared/shared.interface';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/shared/shared.model';
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





  getTodoID(): number {

    return +this.router.url.slice(19);
  }





  getTodoData(): void {

    const id = this.getTodoID();

    // GET DATE FOR FORM
    this.$todo = this.todoS.getTodo(id).subscribe((todo: ITodo) => {
      this.todo = todo;
      this.createPageS.name = todo.name;
      this.createPageS.description = todo.description;
      this.$todo.unsubscribe();
    })
  }





  getNewTodo(id: number): ITodo {
    return { name: this.createPageS.name, description: this.createPageS.description, createdAt: this.todo.createdAt, editedAt: new Date(), id };
  }




  
  updateTodo(): void {
    const id = this.getTodoID();
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
