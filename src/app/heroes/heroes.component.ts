import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { HEROES } from './mock-heroes';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
    heroes: Hero[] = HEROES;
    selectedHeroes: Hero[] = [];

    onSelectHero(hero: Hero): void {
        if (!this.selectedHeroes.includes(hero)) {
            this.selectedHeroes.push(hero);
        } else {
            this.selectedHeroes = this.selectedHeroes
                .filter(selectedHero => selectedHero.id !== hero.id);
        }
    }
}
