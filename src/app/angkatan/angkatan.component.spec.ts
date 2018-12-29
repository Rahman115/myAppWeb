import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngkatanComponent } from './angkatan.component';

describe('AngkatanComponent', () => {
  let component: AngkatanComponent;
  let fixture: ComponentFixture<AngkatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngkatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngkatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
