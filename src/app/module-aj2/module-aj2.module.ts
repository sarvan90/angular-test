import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAj2RoutingModule } from './module-aj2-routing.module';
import { AjModuleLayout1Component } from './aj-module-layout1/aj-module-layout1.component';
import { AjModPage1Component } from './aj-mod-page1/aj-mod-page1.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleAj2RoutingModule
  ],
  declarations: [AjModuleLayout1Component, AjModPage1Component]
})
export class ModuleAj2Module { }
