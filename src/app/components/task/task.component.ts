import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task

  @Output()
  public deleteEvent = new EventEmitter();
}
