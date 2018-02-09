import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestApiService 
{
  private headers = new Headers({'Content-Type': 'application/json'});
  private rootUrl ='api/heroes';
  constructor(private http:Http){}
  private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  
  save(str)
  {

     this.http.post(this.rootUrl,JSON.stringify(str),{headers:this.headers});

  }


}
