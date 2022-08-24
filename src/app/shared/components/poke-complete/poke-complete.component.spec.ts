import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCompleteComponent } from './poke-complete.component';

describe('PokeCompleteComponent', () => {
  let component: PokeCompleteComponent;
  let fixture: ComponentFixture<PokeCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
