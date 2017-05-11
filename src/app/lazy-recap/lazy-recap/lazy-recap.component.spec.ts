import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRecapComponent } from './lazy-recap.component';

describe('LazyRecapComponent', () => {
  let component: LazyRecapComponent;
  let fixture: ComponentFixture<LazyRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
