import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  hero: Hero = {
      id: 1,
      name: 'Windstorm',
  };
}
