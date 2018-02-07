import { Style } from "./style";

//这个是考虑文本编辑效果的     文本编辑效果    文本编辑效果   文本编辑效果


export class SubContent
{
    content:string;//内容应该比较容易获得，Select对象选取就好
    style:Style;//样式怎么获得呢?   样式是选择的，选择的同时就要更新内容，必须及时更新
}