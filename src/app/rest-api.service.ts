import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './login/user';
import { promise } from 'selenium-webdriver';
import { Token } from './login/token';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Subject } from 'rxjs/Subject';
import { Model } from './return-model/model';


@Injectable()
export class RestApiService 
{
  is_login = false;
  private _loginStateSource = new Subject();
  loginState$ = this._loginStateSource.asObservable();

  private rootUrl1 = '/proxy/token-auth/';
  private headers = new Headers({'Content-Type': 'application/json'});
  
  private rootUrl ='/angular/saysomethingtoangular/a';
  private url3='/proxy/account/';
  


  private csrftoken: string;
  constructor(private http:Http){}
  private handleError(error: any): Promise<any> 
  {

    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }


  doAuthorityManage():boolean
  {
    if(document.cookie=="")
    {
      return false;

    }
    else
    {
      return true;
    }

  }


  addCookie(arg0)
  {
    document.cookie = `token =`+arg0;
    console.log(document.cookie);
  }






  getHeaders (is_submit = false): Headers {
    const header = new Headers();
    header.append('Accept', 'application/json');

    if (is_submit) 
    {
      header.append('X-CSRFToken', this.csrftoken);
      header.append('Content-Type', 'application/json');
    }

    return header;
  }

  
  save(str:Model)
  {
    console.log("to be or not to be ");

    this.http.post(this.rootUrl,JSON.stringify(str),{headers:this.headers})
    .toPromise().then().catch(this.handleError);
    console.log('that is a question');
    console.log(this.rootUrl);

    // this.http.get('http://localhost:8080/saysomethingtoangular/a')
    // .toPromise().then().catch(this.handleError);
    // console.log("this is for debug");

  }


//用户登录  login 组件调用,返回一个token;
  login(user:User):Promise<Token>
  {
    return  this.http.post(this.rootUrl1,JSON.stringify(user),{headers:this.headers}).toPromise().then(res => (res.json()) as Token)
    .catch(this.handleError);
  
  }
  getYourOwnOrgId()
  {
    this.headers.append('Authorization','Token bc00b47897a971eb42778b708528422c9d1d48ab');
    this.http.get(this.url3,{headers:this.headers}).toPromise().then(response => console.log(response.json()));


  }

  getConfigSchemas()
  {
    this.headers.append('Authorization','Token bc00b47897a971eb42778b708528422c9d1d48ab');
    this.http

  }

  checkLogin()
  {
    this.is_login =true;
  }

  


}
