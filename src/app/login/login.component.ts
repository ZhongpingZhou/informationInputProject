import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';
import { Token } from './token';
import { GuardService } from '../guard-service.service';
import userModel from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  
{
  user:User = 
  {
    username:"zzp",
    password:"123456"
  };
  token:Token = 
  {
    token:null

  }
  get diagnostic() 
  { 
    return JSON.stringify(this.user); 
  }
  constructor
  (
    private restApiService: RestApiService,
    private guardService:GuardService 

  )
  {

  }

  login()
  {
    this.restApiService.login(this.user).then(token => this.token=token).then(
      token=>
      {
        if(this.token.token!=null)
        {
          this.restApiService.is_login =true;
          window.location.href='edit';

        }
      }
    );
  }

  getYourOwnOrgId()
  {
    this.restApiService.getYourOwnOrgId();
  }


  
}
