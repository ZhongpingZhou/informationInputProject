import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';
import { Token } from './token';
import { GuardService } from '../guard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  
{
  user:User = 
  {
    username:"",
    password:""
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
    if(document.cookie == "")
    {
      console.log("i will always love u chen si qi");

    }
    else
    {
      console.log(document.cookie);
    }
    this.restApiService.login(this.user).then(token => this.token=token).then(
      token=>
      {
        if(this.token.token!=null)
        {
          console.log(this.token.token);
          this.restApiService.addCookie(this.token.token);
          // this.restApiService.checkLogin();
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
