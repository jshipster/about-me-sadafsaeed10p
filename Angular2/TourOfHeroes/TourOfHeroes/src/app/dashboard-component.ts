import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from './Heroes';
import {  HeroService2 } from './hero.service';

@Component({
  selector: 'top-heroes',
  templateUrl: './dashboard-form.html',
  styleUrls:['./dashboard-style.css']
})
/*
export class DashboardComponent
{
    topHero: Hero[] = this.GetMyTopHero();
    private GetMyTopHero():Hero[]
    {
        return HeroService.getInstance().GetTopHeroes();
    }
}*/

export class DashboardComponent implements OnInit {
  topHero: Hero[] = [];

  constructor(private heroService: HeroService2) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.topHero = heroes.slice(1, 5));
  }
}