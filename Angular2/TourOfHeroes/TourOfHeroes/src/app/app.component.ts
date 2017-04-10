import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'hero-app',
  template: `<h2 class="mainHeading">{{title}}</h2>
  <nav>
     <button class="homeButton" [routerLink]="['/dashboard']">Dashboard</button>
     <button class="homeButton" [routerLink]="['/myheroes']">Heroes</button>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles:[`
   li 
   { 
      display: inline-block; 
      padding: 5px;
   }
   .homeButton 
   {
      background-color: lightgrey;
      color: grey;
      cursor: pointer;
      border-radius: 5px;
      height: 33px;
   }
   nav{
      margin-left: 45px;
    }

    .mainHeading {
      color: grey;
      margin-left: 46px;
    }
    `
    ]
})
export class AppComponent  { 
  title: string = "Tour of Heroes";
}
