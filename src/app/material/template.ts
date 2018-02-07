import { Component } from "@angular/core";
import { Template } from "../fsa";

@Component
({
    selector:'templatessssss',
    templateUrl:'./template.html',
})
export class DefineModuleComponent
{
    //数据模型
   private template:Template =
   {
        name:"未命名",
        width:60,
        height:30,
        radian:5,

        style:
        {
            family:"微软雅黑"
        },

        qrcodes:
        [
            {
                geometry:
                {
                    width:20,
                    height:20
                },
                position:
                {
                    x:20,
                    y:30

                },
                url:'renjinggai.com'
            }

        ],



        texts:
        [
            {
                position:
                {
                    x:30,
                    y:40
                },
                title:"日期",
                content:"2018.02.06",
                contentNeedInput:true,
                rotate:false
            }
        ],

        lines:
        [
            {
                start_x:12,
                start_y:13,
                end_x:14,
                end_y:15,
                width:0.2,
            }
        ],

        Rectangels:
        [
            {
                start_x:15,
                start_y:16,
                end_x:15,
                end_y:95,
                radian:4,
                width:0.2,
            }
        ]
    }
    
    
    get diagnostic() { return JSON.stringify(this.template); }

}