import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/model';


const HEROES: Hero[] = [
  { name: '程咬金',superPower:"正义潜能" },
  { name: '庄周',superPower:"蝴蝶效应" },
  { name: '小乔',superPower:"绽放之舞" },
  { name: '孙悟空',superPower:"七十二变" },
  { name: '东皇太一',superPower:"堕神契约" },
  { name: '阿珂',superPower:"幻舞" },
  { name: '诸葛亮',superPower:"东风破袭" }
];
@Component
({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent
{
  hero = HEROES;
}
