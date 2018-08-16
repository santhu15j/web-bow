import { TestBed, async, inject } from '@angular/core/testing';

import { AleadyLoggedInGuard } from './aleady-logged-in.guard';

describe('AleadyLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AleadyLoggedInGuard]
    });
  });

  it('should ...', inject([AleadyLoggedInGuard], (guard: AleadyLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
