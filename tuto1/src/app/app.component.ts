import { Component } from '@angular/core';
import {HeroesComponent} from "./heroes/heroes.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeroesComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour of heroes';
  title2 = 'tour of heroes 2';
}
