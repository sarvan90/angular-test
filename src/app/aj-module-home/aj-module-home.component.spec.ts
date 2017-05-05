import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjModuleHomeComponent } from './aj-module-home.component';

describe('AjModuleHomeComponent', () => {
  let component: AjModuleHomeComponent;
  let fixture: ComponentFixture<AjModuleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjModuleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
