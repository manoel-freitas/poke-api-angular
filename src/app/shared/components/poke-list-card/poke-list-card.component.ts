import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list-card',
  templateUrl: './poke-list-card.component.html',
  styleUrls: ['./poke-list-card.component.scss'],
  animations: [
    trigger('zoom', [
      state('in', style({
        transform: 'scale(1.1)'
      })),
      state('out', style({
        transform: 'scale(1)'
      })),
      transition('in => out', [
        animate('0.2s')
      ]),
      transition('out => in', [
        animate('0.1s')
      ]),
    ])
  ]
})
export class PokeListCardComponent implements OnInit {

  @Input() name = '';
  @Input() coverImage = '';
  @Input() id : number = 0;

  mouseIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  setMouseIn() {
    this.mouseIn = true;
  }

  setMouseOut() {
    this.mouseIn = false
  }

}
