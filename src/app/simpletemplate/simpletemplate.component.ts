import { Component, OnInit } from '@angular/core';
import { Label } from '../label';

@Component({
  selector: 'app-simpletemplate',
  templateUrl: './simpletemplate.component.html',
  styleUrls: ['./simpletemplate.component.css']
})
/**
 * 
 * export class Text
{
    position:Position;
    title:string;
    content:string;
    contentNeedInput:boolean;
    rotate:boolean;


}
 */
export class SimpletemplateComponent {
  label:Label =
  {
    name:"物联网光交锁",
    font:"微软雅黑",
    text:
    {
      position:
      {
        x:20,
        y:30
      },
      title:"",
      content:"",
      contentNeedInput:true,
      rotate:false
    }
 
  }

  get diagnostic() { return JSON.stringify(this.label); }

}
