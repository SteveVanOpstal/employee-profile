import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {LoginComponent} from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [MatInputModule, MatButtonModule, RouterModule.forChild([])],
  exports: [LoginComponent]
})
export class LoginModule {
}
