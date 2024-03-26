import { Observable, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL: string = 'http://localhost:3000/taskList';

  public tasks!: Array<Task>;

  constructor(
    public http: HttpClient
  ) { }

  public getAll(): Observable<Task[] | null> {
    return this.http.get<Array<Task>>(`${this.baseURL}`)
  }

  public delete(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public add(name: string, status: 'regular' | 'important' | 'done'): void {
    this.tasks.push({
      id: window.crypto.randomUUID(),
      name,
      status
    });
  }

  public changeStatus(id: string, status: 'regular' | 'important' | 'done'): void {
    this.tasks.map(task => {
      if (task.id === id) {
        task.status = status;
      }
    })
  }
}
