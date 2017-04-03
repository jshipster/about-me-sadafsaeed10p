import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard-component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailsComponent } from './hero-details-component';

export const router: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myheroes', component: HeroesListComponent },
  { path: 'hero/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(router)],
  declarations: [ AppComponent, DashboardComponent, HeroesListComponent, HeroDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

