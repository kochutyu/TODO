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
  constructor(
    private router: Router,
    private createPageS: CreatePageService,
    private _snackBar: MatSnackBar,
    private todoS: TodosService
  ) { }

  getTodoData(): void {
    const id = this.getId();
     this.$todo = this.todoS.getTodo(id).subscribe( (res: ITodo) => { 
       this.todo = res;
       this.createPageS.name = res.name;
       this.createPageS.description = res.description;
       this.$todo.unsubscribe();
    })
  }

  updateTodo(): void{
    const id = this.router.url.slice(19);
    const todo: ITodo = this.getNewTodo(id);
    this.todoS.putTodo(todo).subscribe(res => {
      this.router.navigate(['/admin', 'read']);
      this.createPageS.resetData();
      this._snackBar.open('TODO was', 'updated', {
        duration: 3000,
      });
    }, err => { 
        console.log(err);
    })
  }

  getNewTodo(id): ITodo {
    return { name: this.createPageS.name, description: this.createPageS.description, createdAt: this.todo.createdAt, editedAt: new Date(), id };
  }

  getId(): number{
    return +this.router.url.slice(19);
  }

}
