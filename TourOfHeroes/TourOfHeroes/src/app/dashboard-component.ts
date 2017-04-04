import { Component } from '@angular/core';
import { Hero, HeroService } from './Heroes';

@Component({
  selector: 'top-heroes',
  templateUrl: './dashboard-form.html',
  styleUrls:['./dashboard-style.css']
})

export class DashboardComponent
{
    topHero: Hero[] = this.GetMyTopHero();
    private GetMyTopHero():Hero[]
    {
        return HeroService.getInstance().GetTopHeroes();
    }
}
