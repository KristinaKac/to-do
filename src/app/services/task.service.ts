import { environment } from './../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL: string = `${environment.apiUrl}`;
  public tasks!: Array<Task>;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Task[] | null> {
    return this.http
      .get<Array<Task>>(`${this.baseURL}/taskList`)
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );
  }

  public delete(id: string): Observable<Task | null> {
    return this.http
      .delete<Task>(`${this.baseURL}/taskList/${id}`)
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );;
  }

  public add(name: string, status: 'regular' | 'important' | 'done'): Observable<Task | null> {
    return this.http
      .post<Task>(`${this.baseURL}/taskList`, { id: window.crypto.randomUUID(), name, status })
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );
  }

  public changeStatus(id: string, status: 'regular' | 'important' | 'done'): Observable<Task | null> {
    return this.http
      .patch<Task>(`${this.baseURL}/taskList/${id}`, { status })
      .pipe(
        catchError((err): Observable<null> => {
          alert(err.error.message);
          return of(null);
        })
      );;
  }
}
