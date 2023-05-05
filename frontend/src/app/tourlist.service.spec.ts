import { TestBed } from '@angular/core/testing';

import { TourlistService } from './tourlist.service';

describe('TourlistService', () => {
  let service: TourlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
