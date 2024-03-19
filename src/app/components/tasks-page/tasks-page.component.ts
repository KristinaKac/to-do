import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {
  public name!: string;
  public status!: 'regular' | 'important' | 'done';

  constructor(
    public taskService: TaskService
  ) { }

  addTask(value: {name: string, status: 'regular' | 'important' | 'done'}){
    this.taskService.add(value.name, value.status);
  }
}
