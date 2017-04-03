import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Hero, HeroService } from './Heroes';
import {HeroesListComponent} from './heroes-list.component';

@Component({
  selector: 'hero-details',
    template: `
    <h2 class="heroDetailsHeading">{{box.value}} details!</h2>
    <b class="labelFields">Id:</b><label class="labelId"> {{heroId}}</label>
    <br />
    <b class="labelFields">Name:</b><input class="inputTextBox" #box (keyup)="onTextChage($event)" value="{{heroName}}">
    <br />
    <br />
    <button class="backButton" (click)="goBack()">Back</button>
  `,
  styles:[`
  .heroDetailsHeading {
      color: darkslategrey;
      margin-left: 46px;
    }

    .labelFields{
         color: grey;
         margin-left: 46px;
    }
    .inputTextBox{
        margin-left: 10px;
        height: 30px;
        font-size: medium;
    }

    .labelId{
        margin-left: 31px;
        color: grey;
        font-weight: bold;
        font-size: large;
    }

    .backButton{
        background-color: lightgrey;
        border-radius: 5px;
        color: grey;
        margin-left: 46px;
        height: 32px;
        cursor:pointer;
    }
    `]
})

export class HeroDetailsComponent{
    heroId:number;
    heroName:string;
    
    constructor(private route:ActivatedRoute){}
    
    ngOnInit()
    {
        this.heroId = this.route.snapshot.params['id'];
        let mySelectedHero:Hero = HeroService.getInstance().GetHeroById(this.heroId);
       
        if(mySelectedHero != null && mySelectedHero != undefined)
            this.heroName = mySelectedHero.name;
    }
    
    onTextChage($event:any)
    {
            HeroService.getInstance().UpdateHeroNameById(this.heroId,$event.target.value);
    }

    goBack()
    {
        window.history.back();
    }
}
