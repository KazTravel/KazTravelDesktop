import { TestBed } from '@angular/core/testing';

import { RuletkaService } from './ruletka.service';

describe('RuletkaService', () => {
  let service: RuletkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuletkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
