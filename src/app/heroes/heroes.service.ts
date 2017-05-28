import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero/hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroesService {
    constructor(private http: Http) {
    }

    private heroesUrl = 'api/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    async create(name: string): Promise<Hero> {
        try {
            const reponse = await this.http
                .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
                .toPromise()

            return reponse.json().data as Hero;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async getHeroes(): Promise<Hero[]> {
        try {
            const response = await this.http.get(this.heroesUrl).toPromise();

            return response.json().data as Hero[];
        } catch (error) {
            return this.handleError(error);
        }
    }

    async getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        try {
            const response = await this.http.get(url).toPromise();

            return response.json().data as Hero;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        try {
            await this.http
                .put(url, JSON.stringify(hero), { headers: this.headers })
                .toPromise();

            return hero;
        } catch (error) {
            return this.handleError(error);
        }
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
