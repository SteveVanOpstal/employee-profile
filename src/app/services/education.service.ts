import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Education} from '../models/education';

@Injectable()
export class EducationService {
  constructor(private http: HttpClient) {}

  getUserEducations(userId: number): Observable<Education[]> {
    return <Observable<Education[]>>this.http.get(`/api/v1/user/${userId}/education`);
  }

  setUserEducation(userId: number, education: Education): Observable<any> {
    return this.http.post(`/api/v1/user/${userId}/education`, education);
  }

  updateUserEducation(userId: number, educationId: number, education: Education): Observable<any> {
    return this.http.put(`/api/v1/user/${userId}/education/${educationId}`, education);
  }

  deleteUserEducation(userId: number, educationId: number): Observable<any> {
    return this.http.delete(`/api/v1/user/${userId}/education/${educationId}`);
  }
}
