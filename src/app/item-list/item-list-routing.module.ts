import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemViewComponent } from './item-view/item-view.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [{
        path:'item',component:ItemViewComponent,  
        children:[{
           path:'detail/:id',component:ItemDetailComponent            
        }]
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
