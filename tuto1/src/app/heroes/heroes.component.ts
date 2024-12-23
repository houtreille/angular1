import { Component } from '@angular/core';
import {UpperCasePipe, NgFor, NgIf} from '@angular/common';
import { Hero, HEROES } from '../hero';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-heroes',
  standalone: true,
    imports: [
        NgFor,
        UpperCasePipe,
        FormsModule,
        NgIf
    ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})


export class HeroesComponent {
  heroes = HEROES;

    selectedHero?: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}