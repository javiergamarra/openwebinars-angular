import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTalkComponent } from './new-talk.component';

describe('NewTalkComponent', () => {
  let component: NewTalkComponent;
  let fixture: ComponentFixture<NewTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
