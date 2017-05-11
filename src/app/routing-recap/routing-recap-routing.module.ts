import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RoutesRecapComponent} from './routes-recap/routes-recap.component';

const routes: Routes = [
  {
    path: 'routesRecapModulePath' , component: RoutesRecapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRecapRoutingModule { }
