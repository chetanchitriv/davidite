import { TestBed } from '@angular/core/testing';

import { EvalfunctionService } from './evalfunction.service';

describe('EvalfunctionService', () => {
  let service: EvalfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvalfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
