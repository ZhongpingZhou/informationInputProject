import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';
import { Token } from './token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  
{
  user:User = {
    username:"zzp",
    password:"123456"
  };
  token:Token = 
  {
    token:""

  }
  get diagnostic() 
  { 
    return JSON.stringify(this.user); 
  }
  constructor(private  restApiService: RestApiService){}

  login()
  {
    this.restApiService.login(this.user).then( token => console.log(this.token = token));
  }

  getYourOwnOrgId()
  {
    this.restApiService.getYourOwnOrgId();
  }

}
