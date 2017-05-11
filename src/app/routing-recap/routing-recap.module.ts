import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRecapRoutingModule } from './routing-recap-routing.module';
import { RoutesRecapComponent } from './routes-recap/routes-recap.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRecapRoutingModule
  ],
  declarations: [RoutesRecapComponent]
})
export class RoutingRecapModule { }
