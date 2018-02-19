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
  // no longer needed: selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /* using observables; note the 'subscribe'
  This asynchronous approach will work when the
  HeroService requests heroes from the server.
  This also works with mock data.
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  /* original; non-observable method.
  This will not work in a real app.
    You're getting away with it now because the service currently returns mock heroes.
    But soon the app will fetch heroes from a remote server, which is an inherently asynchronous operation.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
*/
/* no longer needed
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } */
}
