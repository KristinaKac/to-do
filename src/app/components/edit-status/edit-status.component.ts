import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrl: './edit-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditStatusComponent {
  status = 'regular';

  @Output()
  public editStatusEvent = new EventEmitter();

  submit() {
    this.editStatusEvent.emit(this.status);
  }
}
