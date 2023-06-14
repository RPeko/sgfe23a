import { TestBed } from '@angular/core/testing';

import { TackeService } from './tacke.service';

describe('TackeService', () => {
  let service: TackeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TackeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
