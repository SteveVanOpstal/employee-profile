import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ep-login',
  template: `
  <form (enter)="router.navigate('/educations', user.value)">
    <mat-form-field>
      <input matInput placeholder="User Id" #user>
    </mat-form-field>
    <button mat-raised-button [routerLink]="['/educations', user.value]">Submit</button>
  </form>`
})
export class LoginComponent {
  constructor(public router: Router) {
  }
}
