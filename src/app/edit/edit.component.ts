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
      //配置项1
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
              enumList:
              [
                {
                  value:0,
                  text:null,
                }
              ]
            }

          },

        ],
      },

      //配置项2
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
            key:"motion_threshold",
            text:"运动阈值",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:null
            }

          },
          {
            key:"motion_keep_time",
            text:"运动持续时间",
            type:"u_int16",
            detail:
            {
              unit:"毫秒",
              enumList:null
            }
          },

          {
            key:"still_threshold",
            text:"静止阈值",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:null
            }
          },

          {
            key:"still_keep_time",
            text:"静止保持时间",
            type:"u_int16",
            detail:
            {
              unit:"毫秒",
              enumList:null
            }
          },


          {
            key:"space_holder_1",
            text:"保留",
            type:"u_int8",
            detail:
            {
              unit:null,
              enumList:
              [
                {
                  value:0,
                  text:"保留",
                }
              ]
            }
          }

        ],
      },


      //配置项3
      {
        text:"加速度零点偏置",
        id:102,
        items:
        [
          {
            key:"acceleration_offset_x",
            text:"X轴",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:null

            }

          },

          {
            key:"acceleration_offset_y",
            text:"Y轴",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:null
            }

          },
          {
            key:"acceleration_offset_z",
            text:"Z轴",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:null
            }
          },

        ]
      },

      //配置项4
      {
        text:"子锁数量",

        id:104,
        items:
        [
          {
            key:"slave_number",
            text:"子锁数量",
            type:"u_int8",
            detail:
            {
              unit:"台",
              enumList:null
            }
          }
        ]
      }


      






    ]
  }


  get diagnostic() { return JSON.stringify(this.root); }


  

}
