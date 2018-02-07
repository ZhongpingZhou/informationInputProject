import { Component, OnInit } from '@angular/core';
import { Root } from '../interfaces/root';
import { Config_block } from '../interfaces/config_blocks';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  
{
  root:Root =
  {
    config_blocks:
    [
      {
        text:"链接模式",
        id:1,
        items:
        [
          {
            key:"online_mode",
            text:"连接模式",
            type:"u_int8",
            detail:
            {
              unit:null,
              enumList:
              [
                {
                  value:0,
                  text:"短在线"
                },
                {
                  value:1,
                  text:"长在线"
                }
              ]

            }

          },

          {
            key:"heart_beat_time",
            text:"心跳周期",
            type:"u_int16",
            detail:
            {
              unit:"分钟",
              enumList:null
            }

          },

        ],
      },


      {
        text:"报警阈值",
        id:101,
        items:
        [
          {
            key:"silence_time",
            text:"静默时间",
            type:"u_int16",
            detail:
            {
              unit:"秒",
              enumList:null

            }

          },

          {
            key:"heart_beat_time",
            text:"心跳周期",
            type:"u_int16",
            detail:
            {
              unit:"分钟",
              enumList:null
            }

          },

        ],
      },



      {
        text:"链接模式",
        id:1,
        items:
        [
          {
            key:"online_mode",
            text:"连接模式",
            type:"u_int8",
            detail:
            {
              unit:null,
              enumList:
              [
                {
                  value:0,
                  text:"短在线"
                },
                {
                  value:1,
                  text:"长在线"
                }
              ]

            }

          },

          {
            key:"heart_beat_time",
            text:"心跳周期",
            type:"u_int16",
            detail:
            {
              unit:"分钟",
              enumList:null
            }

          },

        ],
      },


      






    ]
  }


  

}
