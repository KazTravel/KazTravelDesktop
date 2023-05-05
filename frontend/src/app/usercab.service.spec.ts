import { TestBed } from '@angular/core/testing';

import { UsercabService } from './usercab.service';

describe('UsercabService', () => {
  let service: UsercabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
