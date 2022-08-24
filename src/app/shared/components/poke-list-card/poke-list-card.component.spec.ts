import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListCardComponent } from './poke-list-card.component';

describe('PokeListCardComponent', () => {
  let component: PokeListCardComponent;
  let fixture: ComponentFixture<PokeListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
