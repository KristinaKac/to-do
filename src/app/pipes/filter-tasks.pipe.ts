import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[], name: string, status: 'regular' | 'important' | 'done' | 'noStatus'): Task[] {
    let filterTasks: Task[] = tasks;

    if ((!status || status === 'noStatus') && name) {
      filterTasks = tasks.filter(task => task.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (status === 'noStatus' && !name) {
      filterTasks
    }
    if ((status && status !== 'noStatus') && !name) {
      filterTasks = tasks.filter(task => task.status === status);
    }
    if (status && status !== 'noStatus' && name) {
      filterTasks = tasks.filter(task => task.status === status);
      filterTasks = filterTasks.filter(task => task.name.toLowerCase().includes(name.toLowerCase()));
    }
    return filterTasks;
  }
}
