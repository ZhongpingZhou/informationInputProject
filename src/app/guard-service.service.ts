//路由守卫，判断用户是否登录
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import userModel from './model/user.model';
import { RestApiService } from './rest-api.service';

@Injectable()
export class GuardService implements CanActivate 
{
  
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
  {
    
    var path = route.routeConfig.path;
    const nextRoute = ['login','edit'];
    let isLogin = this.restApi.is_login;
  

    if(nextRoute.indexOf(path) >=0)
    {
      if(!isLogin)
      {
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
      this.router.navigate(['home']);
      return false;

    }
    
  }
  constructor(private router:Router,
  private restApi:RestApiService) { }

}
