export class Model
{
    online_mode:number;//链接模式
    heart_beat_time:string;//心跳周期 userInput
    silence_time:string;//静默时间 userInput
    motion_threshold:string;//运动阀值
    motion_keep_time:string;//运动持续时间
    still_threshold:string;//静止阀值
    
    
    still_keep_time:string;//禁止持续时间
    space_holder_1:number;//保留
    acceleration_offset_x:string;//加速度偏置顶
    acceleration_offset_y:string;
    acceleration_offset_z:string;
    slave_number:string;//子锁数量
}