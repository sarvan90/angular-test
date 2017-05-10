import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareItComponent } from './share-it.component';

describe('ShareItComponent', () => {
  let component: ShareItComponent;
  let fixture: ComponentFixture<ShareItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
