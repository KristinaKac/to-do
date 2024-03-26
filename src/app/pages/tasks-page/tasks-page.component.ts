import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPageComponent implements OnInit, OnDestroy {
  public nameFilter!: string;
  public statusFilter!: 'regular' | 'important' | 'done' | 'noStatus';
  private subscription: Subscription | null = null;

  constructor(
    public taskService: TaskService,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe((data: Array<Task> | null) => {
      if (data) {
        this.taskService.tasks = data;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }

  addTask(value: { name: string, status: 'regular' | 'important' | 'done' }) {
    this.taskService.add(value.name, value.status);
  }
  deleteTask(id: string) {
    this.taskService.delete(id);
  }
  filter(value: { name: string, status: 'regular' | 'important' | 'done' | 'noStatus' }) {
    this.nameFilter = value.name;
    this.statusFilter = value.status;
  }
  editStatusTask(value: { id: string, status: 'regular' | 'important' | 'done' }) {
    this.taskService.changeStatus(value.id, value.status);
  }
}
