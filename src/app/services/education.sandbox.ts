import {Injectable} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

import {Education} from '../models/education';

import {EducationService} from './education.service';

@Injectable()
export class EducationSandbox {
  constructor(private education: EducationService) {}

  getUserEducations(route: ActivatedRoute): Observable<Education[]> {
    return this.mapUserId(route, (userId: number) => this.education.getUserEducations(userId));
  }

  setUserEducation(route: ActivatedRoute, education: Education): Observable<any> {
    return this.mapUserId(
        route, (userId: number) => this.education.setUserEducation(userId, education));
  }

  updateUserEducation(route: ActivatedRoute, educationId: number, education: Education):
      Observable<any> {
    return this.mapUserId(
        route,
        (userId: number) => this.education.updateUserEducation(userId, educationId, education));
  }

  deleteUserEducation(route: ActivatedRoute, educationId: number): Observable<any> {
    return this.mapUserId(
        route, (userId: number) => this.education.deleteUserEducation(userId, educationId));
  }

  private mapUserId(route: ActivatedRoute, cb: Function): Observable<any> {
    return this.getUserId(route).pipe(switchMap((userId: number) => cb(userId)));
  }

  private getUserId(route: ActivatedRoute) {
    return route.paramMap.pipe(map((params: ParamMap) => params.get('id')), tap(console.log));
  }
}
