import { TestBed } from '@angular/core/testing';

import { LinijeService } from './linije.service';

describe('LinijeService', () => {
  let service: LinijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
