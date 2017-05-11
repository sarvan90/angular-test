import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AjModuleLayout1Component } from './aj-module-layout1.component';

describe('AjModuleLayout1Component', () => {
  let component: AjModuleLayout1Component;
  let fixture: ComponentFixture<AjModuleLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjModuleLayout1Component ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjModuleLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
