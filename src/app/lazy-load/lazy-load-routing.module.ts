import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LazyComponent} from './lazy/lazy.component';

const routes: Routes = [
  // {path:'', redirectTo:'lazy',pathMatch:'full'},
  // {path:'lazy', component:LazyComponent},
  {path: '', component:LazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
