import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LazyRecapComponent} from './lazy-recap/lazy-recap.component';

const routes: Routes = [
  {
    /*empty path and component path should be provided to take the reference for Lazy Loading*/
    path: '', component: LazyRecapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRecapRoutingModule { }
