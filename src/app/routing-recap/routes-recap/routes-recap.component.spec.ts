import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesRecapComponent } from './routes-recap.component';

describe('RoutesRecapComponent', () => {
  let component: RoutesRecapComponent;
  let fixture: ComponentFixture<RoutesRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
