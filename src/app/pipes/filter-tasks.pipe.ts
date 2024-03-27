import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[], name: string, status: 'regular' | 'important' | 'done' | 'noStatus'): Task[] {
    let filterTasks: Task[] = tasks;

    switch (status) {
      case 'noStatus':
        name ? filterTasks = tasks.filter(task => task.name.toLowerCase().includes(name.toLowerCase())) : filterTasks;
        break;
      case 'regular':
      case 'done':
      case 'important':
        filterTasks = tasks.filter(task => task.status === status);
        name ? filterTasks = filterTasks.filter(task => task.name.toLowerCase().includes(name.toLowerCase())) : filterTasks;
        break;
      default:
        break;
    }
    return filterTasks;
  }
}
