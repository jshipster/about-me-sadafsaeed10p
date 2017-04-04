import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Hero, HeroService } from './Heroes';
import {HeroesListComponent} from './heroes-list.component';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-detail-form.html',
  styleUrls:['./heroDetail-style.css']
})

export class HeroDetailsComponent{
    heroId:number;
    heroName:string;
    previousPage:string;
    
    constructor(private route:ActivatedRoute){}
    
    ngOnInit()
    {
        this.heroId = this.route.snapshot.params['id'];
        this.previousPage = this.route.snapshot.params['page'];
        let mySelectedHero:Hero = HeroService.getInstance().GetHeroById(this.heroId);
       
        if(mySelectedHero != null && mySelectedHero != undefined)
            this.heroName = mySelectedHero.name;
    }
    
    onTextChage($event:any)
    {
            HeroService.getInstance().UpdateHeroNameById(this.heroId,$event.target.value);
    }
}
