import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundHistoryComponent } from './fund-history.component';

describe('FundHistoryComponent', () => {
  let component: FundHistoryComponent;
  let fixture: ComponentFixture<FundHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
