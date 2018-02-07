import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `


    <templatessssss></templatessssss>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
