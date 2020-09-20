import { NgModule } from '@angular/core';
import {ErrorComponent} from './error.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [RouterModule.forChild(routes)],
})
export class ErrorRoutingModule { }
