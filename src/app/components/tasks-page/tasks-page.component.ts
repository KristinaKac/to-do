import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPageComponent {
  public nameFilter!: string;
  public statusFilter!: 'regular' | 'important' | 'done' | 'noStatus';

  constructor(
    public taskService: TaskService
  ) { }

  addTask(value: {name: string, status: 'regular' | 'important' | 'done'}){
    this.taskService.add(value.name, value.status);
  }
  deleteTask(value: number){
    this.taskService.delete(value);
  }
  filter(value: {name: string, status: 'regular' | 'important' | 'done' | 'noStatus'}) {
    this.nameFilter = value.name;
    this.statusFilter = value.status;
  }
  editStatusTask(value: {id: number, status: 'regular' | 'important' | 'done'}) {
    this.taskService.changeStatus(value.id, value.status);
  }
}
