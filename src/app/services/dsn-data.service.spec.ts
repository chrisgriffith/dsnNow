import { TestBed } from '@angular/core/testing';

import { DsnDataService } from './dsn-data.service';

describe('DsnDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DsnDataService = TestBed.get(DsnDataService);
    expect(service).toBeTruthy();
  });
});
