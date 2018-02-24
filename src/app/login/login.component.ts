import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';
import { Token } from './token';
import { GuardService } from '../guard-service.service';
import { CookieService } from '../cookie.service';

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
    private guardService:GuardService,
    private cookieService:CookieService

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
          console.log(this.token.token);
          //this.restApiService.addCookie(this.token.token);  采用github上面的方式
          // this.restApiService.checkLogin();
          this.cookieService.set('Token',this.token.token); //gitHub上比较好的方式
           window.location.href='form';
          console.log(document.cookie);
        }
      }
    );
  }



  
}
