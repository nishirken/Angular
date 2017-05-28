import { Component, OnInit } from '@angular/core';

import { HeroesService } from './heroes.service';
import { Hero } from './hero/hero';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    constructor(private heroesService: HeroesService) {
    }

    heroes: Hero[] = [];
    selectedHeroes: Hero[] = [];

    async getHeroes(): Promise<void> {
        this.heroes = await this.heroesService.getHeroes();
    }

    onSelectHero(hero: Hero): void {
        if (!this.selectedHeroes.includes(hero)) {
            this.selectedHeroes.push(hero);
        } else {
            this.selectedHeroes = this.selectedHeroes
                .filter(selectedHero => selectedHero.id !== hero.id);
        }
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
