import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRecapRoutingModule } from './lazy-recap-routing.module';
import { LazyRecapComponent } from './lazy-recap/lazy-recap.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRecapRoutingModule
  ],
  declarations: [LazyRecapComponent]
})
export class LazyRecapModule { }
