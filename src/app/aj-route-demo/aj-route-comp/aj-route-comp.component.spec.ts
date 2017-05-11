import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjRouteCompComponent } from './aj-route-comp.component';

describe('AjRouteCompComponent', () => {
  let component: AjRouteCompComponent;
  let fixture: ComponentFixture<AjRouteCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjRouteCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjRouteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
