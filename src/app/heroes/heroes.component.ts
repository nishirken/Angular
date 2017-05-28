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

    delete(hero: Hero): Promise<void> {
        return this.heroesService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
            });
    }

    async getHeroes(): Promise<void> {
        this.heroes = await this.heroesService.getHeroes();
    }

    async add(name: string): Promise<void> {
        name = name.trim();
        if (!name) { return; }
        const hero = await this.heroesService.create(name)

        this.heroes.push(hero);
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
