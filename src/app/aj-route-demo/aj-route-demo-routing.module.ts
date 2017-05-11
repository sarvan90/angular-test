import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjRouteCompComponent} from './aj-route-comp/aj-route-comp.component'

const routes: Routes = [
  {
    //path:'ajRoutingDemo',component:AjRouteCompComponent
     path:'',component:AjRouteCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjRouteDemoRoutingModule { }
