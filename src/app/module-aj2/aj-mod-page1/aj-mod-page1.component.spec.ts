import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjModPage1Component } from './aj-mod-page1.component';

describe('AjModPage1Component', () => {
  let component: AjModPage1Component;
  let fixture: ComponentFixture<AjModPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjModPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjModPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
