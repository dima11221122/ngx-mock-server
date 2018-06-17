import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMainComponent } from './lazy-main.component';

describe('LazyMainComponent', () => {
  let component: LazyMainComponent;
  let fixture: ComponentFixture<LazyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
