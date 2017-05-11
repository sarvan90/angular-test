import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ModuleAj2Module} from './module-aj2/module-aj2.module';
//import {LazyLoadModule} from './lazy-load/lazy-load.module';
import {RoutingRecapModule} from './routing-recap/routing-recap.module';
//  import {LazyRecapModule} from './lazy-recap/lazy-recap.module';
/* Commented for Lazy loading - no need to import*/
//import {ModByAnanthModule} from './mod-by-ananth/mod-by-ananth.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjModuleHomeComponent } from './aj-module-home/aj-module-home.component';
import { SarvanComponent } from './sarvan/sarvan.component';
import { AnanthCompComponent } from './ananth-comp/ananth-comp.component';
import { Layout1Component } from './layout1/layout1.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes/:id', component: HeroListComponent, data: { title: 'Heroes List' } },
  { path: 'AjModules', component: AjModuleHomeComponent },
  { path: 'sarvan', component: SarvanComponent },
  { path: 'ananth', component: AnanthCompComponent },
  { path: 'lazy', loadChildren:'app/lazy-load/lazy-load.module#LazyLoadModule'},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {path: 'lazyRecapPath', loadChildren: 'app/lazy-recap/lazy-recap.module#LazyRecapModule'},
  {path: 'compbyananth', loadChildren: 'app/mod-by-ananth/mod-by-ananth.module#ModByAnanthModule'},
  { path: '**', component: PageNotFoundComponent },
  //ModuleAj2RoutingModule
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    AjModuleHomeComponent,
    SarvanComponent,
    AnanthCompComponent,
    Layout1Component
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuleAj2Module,
  //  LazyLoadModule,
  RoutingRecapModule,
 // LazyRecapModule,
 /* Commented for Lazy loading*/
// ModByAnanthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
