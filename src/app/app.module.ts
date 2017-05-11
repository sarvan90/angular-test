import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ModuleAj2Module} from './module-aj2/module-aj2.module';
//import {LazyLoadModule} from './lazy-load/lazy-load.module';
import {RoutingRecapModule} from './routing-recap/routing-recap.module';
//  import {LazyRecapModule} from './lazy-recap/lazy-recap.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjModuleHomeComponent } from './aj-module-home/aj-module-home.component';
import { SarvanComponent } from './sarvan/sarvan.component';
import { AnanthCompComponent } from './ananth-comp/ananth-comp.component';
import { Layout1Component } from './layout1/layout1.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes/:id', component: HeroListComponent, data: { title: 'Heroes List' } },
  { path: 'AjModules', component: AjModuleHomeComponent },
  { path: 'sarvan', component: SarvanComponent },
  { path: 'ananth', component: AnanthCompComponent },
  { path: 'lazy', loadChildren:'app/lazy-load/lazy-load.module#LazyLoadModule' },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {path: 'lazyRecapPath', loadChildren: 'app/lazy-recap/lazy-recap.module#LazyRecapModule', data: { preload: true }},
   {path:'ajRoutingDemo',loadChildren:'app/aj-route-demo/aj-route-demo.module#AjRouteDemoModule'},
  { path: '**', component: PageNotFoundComponent }
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
    //RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategyService })
  ],
  providers: [ SelectivePreloadingStrategyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
