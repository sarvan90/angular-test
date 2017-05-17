import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemHomeComponent } from './item-home/item-home.component';

@NgModule({
  imports: [
    CommonModule,
    ItemListRoutingModule
  ],
  declarations: [ItemViewComponent, ItemDetailComponent, ItemHomeComponent]
})
export class ItemListModule { }
