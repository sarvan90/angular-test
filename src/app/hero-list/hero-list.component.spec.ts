import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ModuleAj2Module} from '../module-aj2/module-aj2.module';
import { Router, ActivatedRoute  } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { HeroListComponent } from './hero-list.component';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListComponent ],
      imports: [ModuleAj2Module, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
