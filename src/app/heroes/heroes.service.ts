import { Injectable } from '@angular/core';
import { Hero } from './hero/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroesService {
    getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(HEROES), 500);
        });
    }

    async getHero(id: number): Promise<Hero> {
        const hero = await this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));

        return hero;
    }
}
