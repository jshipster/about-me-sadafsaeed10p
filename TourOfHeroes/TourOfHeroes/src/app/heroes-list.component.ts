import { Component } from '@angular/core';
import { Hero, HeroService } from './Heroes';

@Component({
  selector:'hero-list',
  templateUrl: './hero-list-form.html'
  ,styleUrls:['./heroList-style.css']
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
