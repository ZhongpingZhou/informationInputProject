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
  
  private url3='/proxy/account/';
  

  constructor(private http:Http){}

  //错误处理方法
  private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }


  //权限,判断cookie是否为空
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


  // 向浏览器中添加cookie (当用户登录成功时)
  addCookie(arg0)
  {
    document.cookie = `token =`+arg0;
    console.log(document.cookie);
  }
  
  save(str:Model)
  {
    const rootUrl ='/angular/saysomethingtoangular/a';
    console.log("将数据发送到服务器保存的方法");
    this.http.post(rootUrl,JSON.stringify(str),{headers:this.headers})
    .toPromise().then().catch(this.handleError);
    console.log('that is a question');
    console.log(rootUrl);
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
