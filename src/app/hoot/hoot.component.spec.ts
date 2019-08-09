import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HootComponent } from './hoot.component';

describe('HootComponent', () => {
  let component: HootComponent;
  let fixture: ComponentFixture<HootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
