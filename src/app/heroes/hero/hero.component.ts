import { Component, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    @Input() hero: Hero;
    @Input() selectHero;
    @Input() delete;
    selected: boolean;

    onSelect(hero: Hero): void {
        this.selected = !this.selected;
        this.selectHero(hero);
    }
}
