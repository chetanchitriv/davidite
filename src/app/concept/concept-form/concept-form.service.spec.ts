import { TestBed } from '@angular/core/testing';

import { ConceptFormService } from './concept-form.service';

describe('ConceptFormService', () => {
  let service: ConceptFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConceptFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
