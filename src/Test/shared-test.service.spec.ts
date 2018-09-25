import { TestBed, inject } from '@angular/core/testing';

import { SharedTestService } from './shared-test.service';

describe('SharedTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedTestService]
    });
  });

  it('should be created', inject([SharedTestService], (service: SharedTestService) => {
    expect(service).toBeTruthy();
  }));
});
