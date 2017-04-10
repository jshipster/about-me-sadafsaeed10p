import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard-component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailsComponent } from './hero-details-component';
import { HeroService2 }          from './hero.service';
import { UserService} from './UserService';
import { UserProfileComponent } from './UserProfile.component';
import { UserAuthService } from './AuthenticationService';
import { LoginFormComponent } from './LoginFormComponent';
import { HomeComponent } from './home-component';

export const router: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myheroes', component: HeroesListComponent },
  { path: 'hero/:id/:page', component: HeroDetailsComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),RouterModule.forRoot(router)],
  declarations: [ AppComponent, LoginFormComponent, HomeComponent ,DashboardComponent, HeroesListComponent, HeroDetailsComponent, UserProfileComponent ],
  providers:    [ HeroService2, UserService , UserAuthService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

