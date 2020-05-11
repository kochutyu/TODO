import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../../shared.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Injectable({
  providedIn: 'root'
})
export class ShowTodoService {

  todo: ITodo; // for init data
  statusContentInit: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private todoS: TodosService
  ) { }

  getTodoData(): void {
    this.todoS.getTodo(this.getId()).subscribe((res: ITodo) => {
      this.todo = res;
      this.statusContentInit = true;
      console.log(this.statusContentInit);
      
    }, err => {
      console.log(err);
    })
  }

  getId(): number {
    return +this.router.url.slice(6)
  }
}
