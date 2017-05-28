import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero/hero';
import { HeroesService } from '../heroes/heroes.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroesService) {
    }

    heroes: Hero[] = [];

    async ngOnInit(): Promise<void> {
        const heroes = await this.heroService.getHeroes();

        this.heroes = heroes.slice(1, 5);
    }
}
