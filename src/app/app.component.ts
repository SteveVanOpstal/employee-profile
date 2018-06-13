import {Component} from '@angular/core';

@Component({
  selector: 'ep-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Employee Profile</h1>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';
}
