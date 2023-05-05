import { TestBed } from '@angular/core/testing';

import { HottoursService } from './hottours.service';

describe('HottoursService', () => {
  let service: HottoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HottoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
