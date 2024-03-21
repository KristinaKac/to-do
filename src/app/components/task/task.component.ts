import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  editStatusMode: boolean = false;

  @Input() task!: Task

  @Output()
  public deleteEvent = new EventEmitter();

  @Output()
  public editStatusEvent = new EventEmitter();

  editStatus(status: 'regular' | 'important' | 'done') {
    this.editStatusEvent.emit({ id: this.task.id, status });
    this.editStatusMode = false;
  }
}
