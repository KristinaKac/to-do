import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrl: './edit-status.component.scss'
})
export class EditStatusComponent {
  status = 'regular';

  @Output()
  public editStatusEvent = new EventEmitter();

  submit() {
    this.editStatusEvent.emit(this.status);
  }
}
