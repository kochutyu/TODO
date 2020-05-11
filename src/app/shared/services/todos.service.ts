import { Injectable } from '@angular/core';
import { ITodo, IReadTable } from '../shared.interface';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  displayedColumns: string[] = ['position', 'name', 'dateOfcreate', 'dateOfEdit', 'edit', 'delete'];
  displayedColumnsForUser: string[] = ['position', 'name', 'dateOfcreate', 'dateOfEdit'];
  dataSource: IReadTable[];
  $updateTodos: Subscription;
  removeID: number;
  constructor(
    private http: HttpClient
  ) { }

  updateTodos(): void {
    let table: IReadTable[];
    this.$updateTodos = this.getTodos().subscribe((res: ITodo[]) => {
      this.dataSource = res.map((todo: ITodo, idx: number) => {
        return {
          name: todo.name,
          dateOfcreate: new Date(todo.createdAt),
          dateOfEdit: todo.editedAt === 'No' ? todo.editedAt : new Date(todo.editedAt),
          edit: todo.id,
          delete: todo.id,
          position: idx,
          id: idx + 1
        }
      })
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
}
