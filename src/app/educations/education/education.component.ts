import {Component, Input} from '@angular/core';

@Component({
  selector: 'ep-education',
  template: `
    <p>{{ education.id }}</p>
  `
})
export class EducationComponent {
  @Input() education;
  constructor() {}
}
