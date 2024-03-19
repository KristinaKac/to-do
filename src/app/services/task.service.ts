import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Array<Task> = [
    {
      id: 1,
      name: 'Купить подарок на день рождение',
      status: 'regular',
    },
    {
      id: 2,
      name: 'Запланировать поездку',
      status: 'important',
    },
    {
      id: 3,
      name: 'Забронировать билеты',
      status: 'important',
    },
    {
      id: 4,
      name: 'Сходить к стоматологу',
      status: 'done',
    },
    {
      id: 5,
      name: 'Купить продукты',
      status: 'regular',
    }
  ]

  constructor() { }

  public delete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public add(name: string, status: 'regular' | 'important' | 'done'): void {
    this.tasks.push({
      id: performance.now(),
      name,
      status
    });
  }

  public changeStatus(id: number, status: 'regular' | 'important' | 'done'): void {
    this.tasks.map(task => {
      if (task.id === id) {
        task.status = status;
      }
    })
  }
}
