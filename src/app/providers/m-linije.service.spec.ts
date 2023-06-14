import { TestBed } from '@angular/core/testing';

import { MLinijeService } from './m-linije.service';

describe('MLinijeService', () => {
  let service: MLinijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLinijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
