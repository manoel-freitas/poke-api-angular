import { PokeGroup } from './../../shared/components/poke-complete/poke-complete.component';
import { pokes } from './../../shared/mocks/pokes';
import { Component, OnInit } from '@angular/core';
import { Poke } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokes: Poke[] = pokes.results.map((p, index) => ({
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    name: p.name,
    detailsUrl: p.url
  }));
  pokesShowed = this.pokes;
  constructor() { }

  ngOnInit(): void {
  }

  searchPokemons(pokesSearched: string[]) {
    this.pokesShowed = this.pokes.filter(poke => pokesSearched.includes(poke.name))
  }

}
