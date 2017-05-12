import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ItemListRoutingModule
  ],
  declarations: [ItemViewComponent, ItemDetailComponent]
})
export class ItemListModule { }
