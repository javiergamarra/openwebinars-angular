import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksComponent } from './talks.component';
import { TalkComponent } from '../talk/talk.component';

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalksComponent, TalkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
