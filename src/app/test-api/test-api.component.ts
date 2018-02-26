import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent 
{
  private username;

  constructor(private restApi:RestApiService) { }

  getAccount()
  {
    this.restApi.getAccountInfo().then(info =>{
      if('fullname' in info)
      {
        console.log('曾经来过');
        this.username = info['fullname'];
        console.log(this.username);
      }
    }) .catch(err => {
      console.log(err);
    });
  }

  
 
}
