import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyeventsComponent } from './nearbyevents.component';

describe('NearbyeventsComponent', () => {
  let component: NearbyeventsComponent;
  let fixture: ComponentFixture<NearbyeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
