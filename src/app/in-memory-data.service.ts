import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Luke Skywalker', type: 'Jedi' },
      { id: 2, name: 'Obi Wan Kenobi', type: 'Jedi' },
      { id: 3, name: 'Yoda master', type: 'Jedi' },
      { id: 4, name: 'Rey Skywalker', type: 'Jedi' },
      { id: 5, name: 'Qui-Gon Jinn', type: 'Jedi' },
      { id: 6, name: 'Chewbacca', type: 'Caçador de recompensas' },
      { id: 7, name: 'Han Solo', type: 'Caçador de recompensas' },
      { id: 8, name: 'Leia Skywaker', type: 'Princesa / Comandante' },
      { id: 9, name: 'Anakin Skywalker', type: 'Jedi' },
      { id: 10, name: 'R2D2', type: 'Droid' }
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}