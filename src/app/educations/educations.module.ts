import {NgModule} from '@angular/core';

import {EducationService} from '../services/education.service';

import {EducationsComponent} from './educations.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './educations.routes';
import { EducationSandbox } from '../services/education.sandbox';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';

@NgModule({declarations: [EducationsComponent, EducationComponent], providers: [EducationService, EducationSandbox],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)]})
export class EducationsModule {
}
