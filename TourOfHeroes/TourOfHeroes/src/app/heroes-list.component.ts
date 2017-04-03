import { Component } from '@angular/core';
import { Hero, HeroService } from './Heroes';

@Component({
  selector:'hero-list',
  template: `
    <h2>My Heroes</h2>
  <ul>
    <li *ngFor="let hero of heroes" (click)="GetSelectedHero(hero)">
    <button class="heroButton2"><span class="idHeroName">{{hero.id}}</span></button>
    <button class="heroButton"><span class="idHeroName">{{hero.name}}</span></button>
    </li>
  </ul>
  <span [hidden]="!isHeroSelected"><h3>{{selectedHeroName | uppercase}} is my hero </h3></span>
  <button class="detailsButton" [routerLink]="['/hero', selectedHeroId]" [hidden]="!isHeroSelected">View Details</button>
  `
  ,styles:[`
   .heroButton 
   { 
    border-radius: 4px 4px 4px 4px;
    border-width: 1px;
    border-color: lightgrey;
    border-style: solid;
    background-color: lightgrey;
    padding: 8px;
    width: 250px;
    position: relative;
    color: darkslategray;
    cursor: pointer;
    margin-left: 49px;
    text-align: left;
   }
   .heroButton2{
    border-radius: 5px 0px 5px 5px;
    border-width: 1px;
    margin-left: 0px;
    background-color: darkgrey;
    width: 52px;
    position: absolute;
    height: 36px;
    cursor: pointer;
}
   .idSpan{
      margin-left:0px;
   }
.idHeroName{
      margin-left:10px;
   }
   li 
   { 
      display: block; 
      padding: 5px;
   }

h2, h3 {
    color: darkslategray;
    margin-left: 46px;
}
   .detailsButton{
        background-color: lightgrey;
        border-radius: 5px;
        color: darkslategray;
        margin-left: 46px;
        height: 32px;
        cursor: pointer;
    }
   `]
})

export class HeroesListComponent{

    isHeroSelected:boolean =false;
    selectedHeroName:string;
    selectedHeroId: number;

  heroes: Hero[] = this.GetHeroList();

  GetSelectedHero(hero: Hero)
  {
    this.isHeroSelected = true;
    this.selectedHeroId = hero.id;
    this.selectedHeroName = hero.name;
    return false;

  }

  GetHeroList():Hero[]
  {
    return HeroService.getInstance().GetAllHeroes(); 
  }
}
