import {Component, OnInit} from '@angular/core';
//import { Router } from '@angular/router';
//import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { UserAuthService } from './AuthenticationService';

@Component({
  selector:'loginpage',
  //templateUrl: './LoginForm.html',
  template:`
  <div class="container">
    <h2 class="heroDetailsHeading">Login</h2>
    
        <b class="labelFields">User Name:</b><input #textUName class="inputTextBox" [(ngModel)] = "txtUserName">
        <br />
        <b class="labelFields">Password:</b><input #textPwd class="inputTextBox" [(ngModel)] = "txtUserPwd">
        <br />
        <br />
        <button (click)="AuthenticateUser(textUName.value,textPwd.value)" class="backButton">Login</button>
       
       
  
    
    
</div>
<router-outlet></router-outlet>
  `,
  styleUrls:['./heroDetail-style.css']
  //,providers: [Router]

})
export class LoginFormComponent implements OnInit{
  //  userName:string;
  //  password:string;

    //constructor(private authService:UserAuthService, private router:Router, private location: Location){}
    constructor(private authService:UserAuthService, private route:ActivatedRoute,private router:Router){}

    AuthenticateUser(userName:string, password:string){
        //alert(userName + " " + password);
        if(this.authService.IsUserAuthenticated(userName, password))
        {
            alert('User Authenticated!');
            this.router.navigate(['/home']);
            return false;
            //this.router.navigate(['/login']);
        }
        else
        {
            alert('Invalid User name or Password provided!');
        }
    }
    ngOnInit() {}

    
}