import { Rectangle } from "./material/rectangle";
import { Line } from "./material/line";
import { Text } from "./material/text";
import { QrCode } from "./material/qr_code";
import { Injectable } from "@angular/core";
import { Style } from "./material/style";
export class Template
{
    name:string;
    width:number;
    height:number;
    radian:number;

    style:Style;
    qrcodes:QrCode[];
    texts:Text[];
    lines:Line[];
    Rectangels:Rectangle[];
}