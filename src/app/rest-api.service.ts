import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Model } from './tryHard/model';

@Injectable()
export class RestApiService 
{
  private headers = new Headers({'Content-Type': 'text/plain'});
  private rootUrl ='http://localhost:8080/saysomethingtoangular/a';
  private csrftoken: string;


  constructor(private http:Http){}
  private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getHeaders (is_submit = false): Headers {
    const header = new Headers();

    header.append('Accept', 'application/json');

    if (is_submit) {
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

    // this.http.get('http://localhost:8080/saysomethingtoangular/a')
    // .toPromise().then().catch(this.handleError);
    // console.log("this is for debug");

  }


}
