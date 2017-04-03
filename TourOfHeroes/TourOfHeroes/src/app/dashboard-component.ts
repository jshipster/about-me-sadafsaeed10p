import { Component } from '@angular/core';
import { Hero, HeroService } from './Heroes';

@Component({
  selector: 'top-heroes',
  //styleUrls: ['style.css'],
    template: `
    <h2 class="dashboardHeading">Top Heroes</h2>
  <ul>
    <li *ngFor="let hero of topHero">
    <button class="dashboardButton" [routerLink]="['/hero', hero.id]">{{hero.name}}</button>
    </li>
  </ul>
  `
  ,styles:[`
   li 
   { 
      display: inline-block; 
      padding: 5px;
   }
   .dashboardButton 
   {
      height: 100px;
      width: 100px;
      background-color: grey;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
    .dashboardHeading {
      color: grey;
      margin-left: 193px;
    }
    
    `
    ]
  //,styleUrls: ['src/app/style.css']
})

export class DashboardComponent
{
    topHero: Hero[] = this.GetMyTopHero();
    private GetMyTopHero():Hero[]
    {
        return HeroService.getInstance().GetTopHeroes();
    }
}
