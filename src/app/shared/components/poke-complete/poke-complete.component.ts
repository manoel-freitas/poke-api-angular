import { Poke } from './../../interfaces/pokemon.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';


export interface PokeGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-poke-complete',
  templateUrl: './poke-complete.component.html',
  styleUrls: ['./poke-complete.component.scss']
})
export class PokeCompleteComponent implements OnInit {

  pokeForm = this._formBuilder.group({
    pokeGroup: '',
  });

  @Input() pokes: Poke[] = [];
  @Output() searchPokemon = new EventEmitter();
  pokeGroups: PokeGroup[]= [];
  pokeGroupsOptions: Observable<PokeGroup[]> = of([]);

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.pokeGroups =     this.pokes.reduce((previous: PokeGroup[], p: Poke) => {
      if (previous.find((ac: any) => ac.letter === p.name.charAt(0))) {
        return previous;
      }
      return [...previous, {
        letter: p.name.charAt(0),
        names: this.pokes.filter(p2 => p2.name.startsWith(p.name.charAt(0))).map(p3 => p3.name)
      }]
    }, []);
    this.pokeGroupsOptions = this.pokeForm.get('pokeGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }
  private _filterGroup(value: string): PokeGroup[] {
    let filteredPokes = this.pokeGroups;
    if (value) {
      filteredPokes = this.pokeGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    this.searchPokemon.emit(filteredPokes.reduce((acc: any[], p) => {
      return [...acc, ...p.names]
    }, []))
    return filteredPokes;
  }

}
