import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompByAnanthComponent } from './comp-by-ananth.component';

describe('CompByAnanthComponent', () => {
  let component: CompByAnanthComponent;
  let fixture: ComponentFixture<CompByAnanthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompByAnanthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompByAnanthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
