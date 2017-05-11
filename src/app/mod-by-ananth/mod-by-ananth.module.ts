import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModByAnanthRoutingModule } from './mod-by-ananth-routing.module';
import { CompByAnanthComponent } from './comp-by-ananth/comp-by-ananth.component';

@NgModule({
  imports: [
    CommonModule,
    ModByAnanthRoutingModule
  ],
  declarations: [CompByAnanthComponent]
})
export class ModByAnanthModule { }
