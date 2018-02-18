import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    /*
    This will not work in a real app.
    You're getting away with it now because the service currently returns mock heroes.
    But soon the app will fetch heroes from a remote server, which is an inherently asynchronous operation.
    */
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
