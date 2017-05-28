import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero/hero';
import { HeroesService } from '../heroes.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroesService: HeroesService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}
    title: string = 'Hero Details';
    hero: Hero;

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroesService.getHero(Number(params['id'])))
            .subscribe(hero => this.hero = hero);
    }
}
