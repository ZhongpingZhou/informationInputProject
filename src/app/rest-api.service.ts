import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class RestApiService 
{
  static host = '/api/label';
  constructor(private http: Http)
  {
  }
  saveTemplate (template): Promise<any>{
    const header = new Headers();
    header.append('Accept', 'application/json');
    const url = RestApiService.host + '/rest_api/templates/';
    return this.http.post(url, template, {headers: header})
        .toPromise()
        .then(response => response.json())
        .catch(err => 
        {
          console.log(err);
          return Promise.reject(err);
        });
  }


}
