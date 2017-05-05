import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ],
  declarations: [LazyComponent]
})
export class LazyLoadModule { }
