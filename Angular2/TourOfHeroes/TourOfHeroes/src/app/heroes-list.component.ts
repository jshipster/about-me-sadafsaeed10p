import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from './Heroes';
import {  HeroService2 } from './hero.service';

@Component({
  selector:'hero-list',
  templateUrl: './hero-list-form.html'
  ,styleUrls:['./heroList-style.css']
})

export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroService2) { }

    isHeroSelected:boolean = false;
    selectedHeroName:string;
    selectedHeroId: number;

  heroes: Hero[] = [];

  GetSelectedHero(hero: Hero)
  {
    this.isHeroSelected = true;
    this.selectedHeroId = hero.id;
    this.selectedHeroName = hero.name;
    return false;

  }

 /* GetHeroList():Hero[]
  {
    return HeroService.getInstance().GetAllHeroes(); 
  }*/

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
