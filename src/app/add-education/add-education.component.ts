import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ep-login',
  template: `
  <form>
    <mat-form-field>
      <input matInput placeholder="School name" #>
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="Education level" #user>
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="User Id" #user>
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="User Id" #user>
    </mat-form-field>
    <button mat-raised-button [routerLink]="['/educations', user.value]">Submit</button>
  </form>`
})
export class AddEducationComponent {
  constructor(public router: Router) {
  }
}
