import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TezComponent } from './tez.component';

describe('TezComponent', () => {
  let component: TezComponent;
  let fixture: ComponentFixture<TezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
