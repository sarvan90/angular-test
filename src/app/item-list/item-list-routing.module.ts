import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemViewComponent } from './item-view/item-view.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemHomeComponent } from './item-home/item-home.component';

const routes: Routes = [{
        path:'item',
        component:ItemViewComponent,  
        children:[{
          path: '',
          children: [
            { path:'detail/:id', component:ItemDetailComponent },
            { path: '', component: ItemHomeComponent }
          ]
        }]
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
