import { TestBed } from '@angular/core/testing';

import { DetaljiService } from './detalji.service';

describe('DetaljiService', () => {
  let service: DetaljiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaljiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
