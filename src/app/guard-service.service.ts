//路由守卫，判断用户是否登录
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestApiService } from './rest-api.service';

@Injectable()
export class GuardService implements CanActivate 
{
  
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    var path = route.routeConfig.path;
    const nextRoute = ['login','edit','form','dialog','header'];
    let isLogin = this.restApi.doAuthorityManage();
    console.log(isLogin);
  

    if(nextRoute.indexOf(path) >=0)
    {
      if(!isLogin)
      {
        console.log("false"+ isLogin);
        //未登录，跳转到login
        this.router.navigate(['login']);
        return false;

      }
      else
      {
        //已经登录，跳转到当前路由
        return true;
      }
    }

    //当前路由是login时
    if(path === 'login')
    {
      if(!isLogin)
      {
        return true;

      }

    }
    else
    {
      this.router.navigate(['edit']);
      return false;

    }
    
  }
  
  constructor(private router:Router,
  private restApi:RestApiService) { }

}
