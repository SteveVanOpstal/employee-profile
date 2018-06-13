import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EducationSandbox} from '../services/education.sandbox';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <ng-template ngFor let-education [ngForOf]="educations$ | async">
      <ep-education [education]="education"></ep-education>
    </ng-template>
    {{ id | json }}
  `
})
export class EducationsComponent implements OnInit {
  educations$;
  id; // test

  constructor(private data: EducationSandbox, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route
    .queryParamMap
    .pipe(map(params => params.get('id'))).subscribe((id) => this.id = id);
    this.educations$ = this.data.getUserEducations(this.route);
  }
}
