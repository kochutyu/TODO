import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/shared/shared.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodosService } from 'src/app/shared/services/todos.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePageService {
  todoList: ITodo[] = [];
  name: string;
  description: string;
  btnDisabled: boolean = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private todoS: TodosService
  ) { }

  resetData(): void {
    this.name = this.description = '';
    this.todoList = [];
    this.btnDisabled = false;
  }


  getId(): number {
    this.todoS.getTodos().subscribe((res: ITodo[]) => {
      this.todoList = res;
    })
    if (this.todoList[0]) {
      return this.todoList[this.todoList.length - 1].id + 1
    }
    return 0
  }

  setTodo(): void {
    const id = this.getId();
    const todo = this.getNewTodo(id);
    this.btnDisabled = true;
    this.todoS.postTodo(todo).subscribe(res => {
      this.router.navigate(['/admin', 'read']);
      this.form.reset();
      this.resetData();
      this._snackBar.open('TODO was', 'saved', {
        duration: 3000,
      });
    }, err => {
      console.log(err);
    })

  }

  getNewTodo(id): ITodo {
    return { name: this.name, description: this.description, createdAt: new Date(), editedAt: 'No', id};
  }
}
