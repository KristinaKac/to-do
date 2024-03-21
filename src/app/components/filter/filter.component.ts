import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @Output()
  public filterEvent = new EventEmitter();

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required
    ]),
    status: new FormControl<'regular' | 'important' | 'done' | 'noStatus'>('noStatus')
  });

  get name() {
    return this.form.controls.name as FormControl;
  }

  submit() {
    this.filterEvent.emit({ name: this.form.value.name, status: this.form.value.status });
  }
}
