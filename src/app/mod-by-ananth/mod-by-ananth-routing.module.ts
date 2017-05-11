import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompByAnanthComponent} from './comp-by-ananth/comp-by-ananth.component';

const routes: Routes = [
  {
    path: '', component: CompByAnanthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModByAnanthRoutingModule { }
