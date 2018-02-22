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
  constructor(private  restApiService: RestApiService){}

  login()
  {
    this.restApiService.login(this.user).then(token => this.token=token).then(
      token=>{
        if(this.token.token!=null)
        {
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
