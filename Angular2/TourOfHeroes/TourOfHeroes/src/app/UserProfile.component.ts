import {Component} from '@angular/core';
import {UserService} from './UserService';

@Component({
    selector:'<user-profile></user-profile>',
    template:`<div>
    <button (click)="LoadUser()">Load profile</button>
    {{ profile | json }}
  </div>`
})

export class UserProfileComponent{
    constructor(private userService: UserService){

    }
profile = {};
    LoadUser(){
        this.userService.GetUser().subscribe(data => {alert(data);this.profile = data});
    }
}