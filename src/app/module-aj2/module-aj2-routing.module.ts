import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjModuleLayout1Component } from './aj-module-layout1/aj-module-layout1.component';
import {AjModPage1Component}  from './aj-mod-page1/aj-mod-page1.component'

const routes: Routes = [  
    { path: 'ajRoute2Module', component: AjModuleLayout1Component,
      children:[
        {
           path:'ajModPage1',component:AjModPage1Component
            
        }
      ]
    }

    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAj2RoutingModule { }
