import { TestBed } from '@angular/core/testing';

import { CSdbService } from './csdb.service';

describe('CSdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CSdbService = TestBed.get(CSdbService);
    expect(service).toBeTruthy();
  });
});
