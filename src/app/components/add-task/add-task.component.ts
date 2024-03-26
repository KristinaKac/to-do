import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {
  public edit: boolean = false;

  @Output()
  public parentEvent = new EventEmitter();

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required
    ]),
    status: new FormControl<'regular' | 'important' | 'done'>('regular')
  });

  get name() {
    return this.form.controls.name as FormControl;
  }

  submit() {
    if (this.form.invalid) { return }
    this.parentEvent.emit({ name: this.form.value.name, status: this.form.value.status });
    this.edit = false;
    this.form.reset();
    this.form.controls.status.setValue('regular')
  }
}
