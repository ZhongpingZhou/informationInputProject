import { Component, OnInit } from '@angular/core';
import { Root } from '../interfaces/root';
import { Config_block } from '../interfaces/config_blocks';
import { RestApiService } from '../rest-api.service';
import { Http } from '@angular/http';
import { Model } from '../return-model/model';

@Component
({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit
{
  
  ngOnInit(): void {

    
  }
  //做双向数据绑定的数据模型，，定义的稍微复杂了一点，是根据一个描述前后端的JSON定义的
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
              {
                value:0,
                text:"短链接",
                sstring:true
              }
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
              {
                value:null,
                text:null,
                sstring:false

              }
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
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }

          },

          {
            key:"motion_threshold",
            text:"运动阈值",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }

          },
          {
            key:"motion_keep_time",
            text:"运动持续时间",
            type:"u_int16",
            detail:
            {
              unit:"毫秒",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }
          },

          {
            key:"still_threshold",
            text:"静止阈值",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }
          },

          {
            key:"still_keep_time",
            text:"静止保持时间",
            type:"u_int16",
            detail:
            {
              unit:"毫秒",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
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
              {
                value:0,
                text:"保留",
                sstring:true,
              }
              
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
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }

            }

          },

          {
            key:"acceleration_offset_y",
            text:"Y轴",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }

          },
          {
            key:"acceleration_offset_z",
            text:"Z轴",
            type:"u_int16",
            detail:
            {
              unit:"mg",
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
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
              enumList:
              {
                value:null,
                text:null,
                sstring:false

              }
            }
          }
        ]
      }


      






    ]
  }
  selects:string[]=["短连接","长链接"];//选择
  select1:string[]=["保留"];//question
  //返回给后端的数据模型定义
  model:Model = 
  {
    online_mode:null,
    heart_beat_time:null,
    silence_time:null,
    motion_threshold:null,
    motion_keep_time:null,
    still_threshold:null,
    still_keep_time:null,
    space_holder_1:null,
    acceleration_offset_x:null,
    acceleration_offset_y:null,
    acceleration_offset_z:null,
    slave_number:null,
  }
  
  
  stringodel:string;
  
  //获得JSON数据，用于测试
  get diagnostic() 
  { 
    return JSON.stringify(this.model); 
  }

  


  //将做了双向数据绑定的root赋值给返回非后端的数据模型model
  change()
  
  {
    // for(let block of this.root.config_blocks)
    // {
    //   for(let item of block.items)
    //   {
    //     if(item.detail.enumList.text=="短连接")
    //     {
    //       this.model.online_mode=0;
    //     }
    //     else if(item.detail.enumList.text=="长链接")
    //     {
    //       this.model.online_mode=1;
    //     }
    
    //   }

    
    if(this.root.config_blocks[0].items[0].detail.enumList.text=="短连接")
    {
      this.model.online_mode = 1;
    }
    else
    {
      this.model.online_mode = 0;
    }
    this.model.space_holder_1=0;
    this.model.heart_beat_time=this.root.config_blocks[0].items[1].detail.enumList.text;
    this.model.silence_time = this.root.config_blocks[1].items[0].detail.enumList.text;
    this.model.motion_threshold = this.root.config_blocks[1].items[1].detail.enumList.text;
    this.model.motion_keep_time =this.root.config_blocks[1].items[2].detail.enumList.text;
    this.model.still_threshold =this.root.config_blocks[1].items[3].detail.enumList.text;
    this.model.still_keep_time=this.root.config_blocks[1].items[4].detail.enumList.text;
    
    this.model.acceleration_offset_x = this.root.config_blocks[2].items[0].detail.enumList.text;
    this.model.acceleration_offset_y = this.root.config_blocks[2].items[1].detail.enumList.text;
    this.model.acceleration_offset_z = this.root.config_blocks[2].items[2].detail.enumList.text;
    this.model.slave_number = this.root.config_blocks[3].items[0].detail.enumList.text;
  }


  //服务注入
  constructor(private restApiService:RestApiService,
    private http:Http
  
  ){};

  //调用前后端接口RestApi,发送给后端
  sendSave()
  {
    this.change();//更加此时此刻的做了双向数据绑定的root数据，更新model数据
    this.restApiService.save(this.model);//发送给后端
  }
}
