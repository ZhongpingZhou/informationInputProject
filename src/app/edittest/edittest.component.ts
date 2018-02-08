import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.css']
})
export class EdittestComponent  
{
  hero:Hero =
  {
    name:"monkeyKing",
    superPower:
    [
      {
        name:"如意齐天",
        harm:1000
      },
      {
        name:"72变",
        harm:3000
      }
    ]
  }


}

export class Hero
{
  name:string;
  superPower:SuperPower[];
}

export class SuperPower
{
  name:string;
  harm:number;
}
