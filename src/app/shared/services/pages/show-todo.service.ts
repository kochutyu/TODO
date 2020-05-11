import { Injectable } from '@angular/core';
import { ITodo } from '../../shared.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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





  getTodoID(): number {
    return +this.router.url.slice(6)
  }





  getTodoData(): void {

    this.todoS.getTodo(this.getTodoID()).subscribe((res: ITodo) => {
      this.todo = res;
      this.statusContentInit = true;
      console.log(this.statusContentInit);
      
    }, err => {
      console.log(err);
    })
  }
}
