import { Injectable } from '@angular/core';
import { ITodo } from '../shared.interface';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  displayedColumns: string[] = ['position', 'name', 'createdAt', 'editedAt', 'edit', 'delete'];
  displayedColumnsForUser: string[] = ['position', 'name', 'createdAt', 'editedAt'];
  dataSource: ITodo[];
  $updateTodos: Subscription;
  removeID: number;





  constructor(
    private http: HttpClient
  ) { }





  updateTodos(): void {
    let table: ITodo[];
    this.$updateTodos = this.getTodos().subscribe((todo: ITodo[]) => {
      this.dataSource = todo.map((todo: ITodo, idx: number) => {
        return {
          ...todo,
          createdAt: new Date(todo.createdAt),
          editedAt: todo.editedAt === 'No' ? todo.editedAt : new Date(todo.editedAt),
          position: idx + 1
        }
      });
      this.$updateTodos.unsubscribe();
    }, err => {
      console.log(err)
    })
  }





  deleteTodo(): void {
    this.removeTodo(this.removeID);
    this.updateTodos();
  }





  removeTodo(id: number): void {
    let $delete: Subscription;
    $delete = this.http.delete(`http://localhost:3000/todos/${id}`).subscribe(res => {
      this.updateTodos();
      $delete.unsubscribe();
    }, err => {
      console.log(err);
    })
  }






  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('http://localhost:3000/todos');
  }





  getTodo(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`http://localhost:3000/todos/${id}`)
  }





  postTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>('http://localhost:3000/todos', todo);
  }





  putTodo(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`http://localhost:3000/todos/${todo.id}`, todo);
  }





  setTodoJSON(todo: ITodo): void {
    localStorage.setItem('preview-todo', JSON.stringify(todo));
  }





  getTodoJSON(): string {
    return localStorage.getItem('preview-todo');
  }





  getTodoFromJSON(): ITodo {
    return JSON.parse(localStorage.getItem('preview-todo'));
  }




}
