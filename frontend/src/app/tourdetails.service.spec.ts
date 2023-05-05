import { TestBed } from '@angular/core/testing';

import { TourdetailsService } from './tourdetails.service';

describe('TourdetailsService', () => {
  let service: TourdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
