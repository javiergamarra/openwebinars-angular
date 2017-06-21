import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTalkComponent } from './favorite-talk.component';

describe('FavoriteTalkComponent', () => {
  let component: FavoriteTalkComponent;
  let fixture: ComponentFixture<FavoriteTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
