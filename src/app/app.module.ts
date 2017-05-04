import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjModuleHomeComponent } from './aj-module-home/aj-module-home.component';
import { AnanthCompComponent } from './ananth-comp/ananth-comp.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
     { path: 'AjModules', component: AjModuleHomeComponent },
  { path: 'ananth', component: AnanthCompComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, 


];


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    AjModuleHomeComponent,
    AnanthCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
