import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock_heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    if (heroes) this.messageService.add('Heroes have been summoned');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero with id number ${id} is summoned`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
