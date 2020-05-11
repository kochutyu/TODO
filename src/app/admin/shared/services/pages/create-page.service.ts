import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/shared/shared.interface';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePageService {

  todoList: ITodo[] = [];
  name: string;
  description: string;
  btnDisabled: boolean = false;
  form: FormGroup;

  $todos: Subscription;




  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private todoS: TodosService
  ) { }





  getTodos(): void {

    // GET TODOS
    this.$todos = this.todoS.getTodos().subscribe((res: ITodo[]) => {
      this.todoList = res;
      this.$todos.unsubscribe();
    })
  }





  getTodoID(): number {

    if (this.todoList[0]) {
      return this.todoList[this.todoList.length - 1].id + 1
    }

    return 0
  }





  getNewTodo(id): ITodo {
    return { name: this.name, description: this.description, createdAt: new Date(), editedAt: 'No', id };
  }





  setTodo(): void {
    const id = this.getTodoID();
    const todo = this.getNewTodo(id);

    // FOR VALID STATUS OF FORM
    this.btnDisabled = true;

    // CREATE NEW TODO
    this.todoS.postTodo(todo).subscribe(res => {

      this.router.navigate(['/admin', 'read']);

      this.form.reset();
      this.resetData();

      // SHOW MESSAGE
      this._snackBar.open('TODO was', 'saved', {
        duration: 3000,
      });

    }, err => {
      console.log(err);
    })
  }





  resetData(): void {
    this.name = this.description = '';
    this.todoList = [];
    this.btnDisabled = false;
  }
}
