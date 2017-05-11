import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SarvanComponent } from './sarvan.component';

describe('SarvanComponent', () => {
  let component: SarvanComponent;
  let fixture: ComponentFixture<SarvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarvanComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
