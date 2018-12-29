import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusComponent } from './pengurus.component';

describe('PengurusComponent', () => {
  let component: PengurusComponent;
  let fixture: ComponentFixture<PengurusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
