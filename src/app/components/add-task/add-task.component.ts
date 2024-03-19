import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Input() name!: string;
  @Input() status!: 'regular' | 'important' | 'done';

  @Output()
  public parentEvent = new EventEmitter();
}
