import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() headerImage = '';
  @Input() coverImage = '';
  @Input() name = '';
  @Input() type = '';
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
