import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjRouteDemoRoutingModule } from './aj-route-demo-routing.module';
import { AjRouteCompComponent } from './aj-route-comp/aj-route-comp.component';

@NgModule({
  imports: [
    CommonModule,
    AjRouteDemoRoutingModule
  ],
  declarations: [AjRouteCompComponent]
})
export class AjRouteDemoModule { }
