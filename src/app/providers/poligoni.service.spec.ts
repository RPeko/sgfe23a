import { TestBed } from '@angular/core/testing';

import { PoligoniService } from './poligoni.service';

describe('PoligoniService', () => {
  let service: PoligoniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoligoniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
