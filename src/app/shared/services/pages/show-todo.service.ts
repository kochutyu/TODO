import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../../shared.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowTodoService {
  todo: ITodo;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getTodoData(): void{
    this.getTodo().subscribe( (res: ITodo) => {
      this.todo = res
    }, err => {
      console.log(err);
    })
  }

  getId(): number{
    return +this.router.url.slice(6,) + 1
  }

  getTodo(): Observable<ITodo>{
    return this.http.get<ITodo>(`http://localhost:3000/todos/${this.getId()}`);
  }
}
