import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  public name!: string;
  public status!: 'regular' | 'important' | 'done' | 'noStatus';

  @Output()
  public filterEvent = new EventEmitter();

}
