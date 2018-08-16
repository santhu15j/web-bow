import { TestBed, inject } from '@angular/core/testing';

import { CoreHelperService } from './core-helper.service';

describe('CoreHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreHelperService]
    });
  });

  it('should be created', inject([CoreHelperService], (service: CoreHelperService) => {
    expect(service).toBeTruthy();
  }));
});
