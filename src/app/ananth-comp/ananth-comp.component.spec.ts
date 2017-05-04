import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanthCompComponent } from './ananth-comp.component';

describe('AnanthCompComponent', () => {
  let component: AnanthCompComponent;
  let fixture: ComponentFixture<AnanthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnanthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
