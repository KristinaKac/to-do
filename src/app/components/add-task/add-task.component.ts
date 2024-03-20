import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  public name!: string;
  public status!: 'regular' | 'important' | 'done' | 'noStatus';

  @Output()
  public parentEvent = new EventEmitter();
}
