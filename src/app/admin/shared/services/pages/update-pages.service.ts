import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ITodo } from 'src/app/shared/shared.interface';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/shared/shared.model';
import { CreatePageService } from './create-page.service';

@Injectable({
  providedIn: 'root'
})
export class UpdatePagesService {
  todo: ITodo;
  $todo: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private createPageS: CreatePageService
  ) { }

  getTodoData(): void {
    const id = this.getId();
     this.$todo = this.getTodo(id).subscribe( (res: ITodo) => { 
       this.todo = res;
       this.createPageS.name = res.name;
       this.createPageS.description = res.description;
       this.$todo.unsubscribe();
    })
  }

  updateTodo(): void{
    const id = this.router.url.slice(19);
    const todo: ITodo = this.getNewTodo(id);
    this.putTodo(todo).subscribe(res => { 
      console.log(res);
      this.router.navigate(['/admin', 'read']);
      this.createPageS.resetData();
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

  getTodo(id:number): Observable<ITodo> { 
    return this.http.get<ITodo>(`http://localhost:3000/todos/${id}`)
  }

  putTodo(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

}
