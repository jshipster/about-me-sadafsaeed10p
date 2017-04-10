import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Hero, HeroService } from './Heroes';
import {HeroesListComponent} from './heroes-list.component';
import {HeroService2} from './hero.service';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-detail-form.html',
  styleUrls:['./heroDetail-style.css']
})

export class HeroDetailsComponent implements OnInit {
  
    hero: Hero;
    heroId:number;
    heroName:string;
    previousPage:string;
    
    constructor(
    private heroService: HeroService2,
    private route: ActivatedRoute,
    private location: Location
  ) {}
   /* ngOnInit()
    {
        this.heroId = this.route.snapshot.params['id'];
        this.previousPage = this.route.snapshot.params['page'];
        let mySelectedHero:Hero = HeroService.getInstance().GetHeroById(this.heroId);
        this.heroService.getHero(this.heroId).then(t => mySelectedHero = t).catch(error => alert(error.message));
        //this.hero = mySelectedHero;
        //this.heroId = this.hero.id;
        //this.heroName = this.hero.name;
        //if(mySelectedHero != null && mySelectedHero != undefined)
        //   this.heroName = mySelectedHero.name;
    }
    */
    ngOnInit(): void 
    {
        this.heroId = this.route.snapshot.params['id'];
      //  this.previousPage = this.route.snapshot.params['page'];
        this.heroService.getHero(this.heroId).then(heroes => this.hero = heroes);
    }

    onTextChage($event:any)
    {
        HeroService.getInstance().UpdateHeroNameById(this.heroId,$event.target.value);
    }

    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
